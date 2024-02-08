<template>
    <div class="edit-user">
      <h1>Edit User</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="id">ID:</label>
          <input type="text" id="id" v-model="user.id" disabled />
        </div>
        <div class="form-group">
          <label for="profilePicture">Profile Picture:</label>
          <input type="file" id="profilePicture" @change="handleProfilePictureChange" />
          <img v-if="previewImage" :src="previewImage" alt="preview" />
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
          <input type="tel" id="phoneNumber" v-model="user.user.phoneNumber" />
        </div>
        <div class="form-group">
          <label for="birthdate">Birthdate:</label>
          <input type="date" id="birthdate" v-model="user.birthdate" />
        </div>
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      userId: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        user: {},
        originalUser: {},
        previewImage: null,
      };
    },
    mounted() {
      this.fetchUser();
    },
    methods: {
      async fetchUser() {
        const response = await fetch(`/api/users/${this.userId}`);
        this.user = await response.json();
        this.originalUser = JSON.parse(JSON.stringify(this.user));
      },
      handleProfilePictureChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.user.profilePicture = file;
  
          const reader = new FileReader();
          reader.onload = (e) => (this.previewImage = e.target.result);
          reader.readAsDataURL(file);
        }
      },
      async handleSubmit() {
      },
      get isModified() {
        return !JSON.stringify(this.user) === JSON.stringify(this.originalUser);
      },
    },
  };
  </script>
  
  <style scoped>
  .edit-user {
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

.form-group img {
  margin-top: 0.5rem;
  width: 100%; 
  height: 150px;
  object-fit: cover;
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
  .edit-user {
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
  