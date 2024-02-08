<template>
    <div class="add-user">
      <h1>Add User</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="id">ID:</label>
          <input type="text" id="id" v-model="user.id" disabled />
        </div>
        <div class="form-group">
          <label for="profilePicture">Profile Picture:</label>
          <input type="file" id="profilePicture" @change="handleProfilePictureChange" />
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="user.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="user.email" required />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" v-model="user.phoneNumber" />
        </div>
        <div class="form-group">
          <label for="birthdate">Birthdate:</label>
          <input type="date" id="birthdate" v-model="user.birthdate" />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          id: '',
          profilePicture: null,
          name: '',
          email: '',
          phoneNumber: '',
          birthdate: null,
        },
      };
    },
    methods: {
      handleProfilePictureChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.user.profilePicture = file;
        }
      },
      async handleSubmit() {
      },
    },
  };
  </script>
  
  <style scoped>
  .add-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;
  font-family: sans-serif; 
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group[disabled] input {
  background-color: #eee;
}

.form-group span {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff; 
  color: #fff; 
}

@media only screen and (max-width: 768px) {
  .add-user {
    max-width: 90%;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.8rem;
  }

  .button {
    font-size: 0.8rem;
  }
}

</style>
  