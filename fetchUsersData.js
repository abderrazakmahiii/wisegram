const https = require('https');
const fs = require('fs');
const bcrypt = require('bcrypt'); 

const endpoint = 'https://dummyjson.com/users'; 
const outputFile = 'users.json';

const admin = {
  id: 'admin',
  name: 'admin',
  password: bcrypt.hashSync('admin', 10),
  email: null,
  phoneNumber: null,
  birthdate: null,
  profilePicture: null,
};

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const users = data.users.map(user => ({
      id: user.id,
      profilePicture: user.picture,
      name: user.name,
      email: user.email,
      phoneNumber: user.phone,
      birthdate: user.birthday,
    }));

    const allUsers = [admin, ...users];

    fs.writeFile(outputFile, JSON.stringify(allUsers, null, 2), err => {
      if (err) {
        console.error('Error writing data:', err);
      } else {
        console.log('Users saved successfully to', outputFile);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
