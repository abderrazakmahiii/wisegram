const https = require('https');
const fs = require('fs');

const endpoint = 'https://dummyjson.com/products';
const outputFile = 'products.json';

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const products = data.products.map(product => ({
      id: product.id,
      name: product.title,
      price: product.price,
      description: product.description,
      imageUrl: product.thumbnail,
      averageRating: product.rating,
    }));

    fs.writeFile(outputFile, JSON.stringify(products, null, 2), err => {
      if (err) {
        console.error('Error writing data:', err);
      } else {
        console.log('Products saved successfully to', outputFile);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });