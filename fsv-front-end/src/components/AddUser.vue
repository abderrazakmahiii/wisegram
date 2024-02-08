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
  
  <style scoped></style>
  