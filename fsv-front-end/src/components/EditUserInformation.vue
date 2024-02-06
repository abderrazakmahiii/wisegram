<template>
    <div class="edit-user-info">
      <h2>Edit User Information</h2>
      <form @submit.prevent="handleSubmit">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="user.name" />
        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" v-model="user.birthdate" />
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" v-model="user.phone" />
        <label for="email">Email Address:</label>
        <input type="email" id="email" v-model="user.email" />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        // Copy the user object for editing
        editedUser: JSON.parse(JSON.stringify(this.user)),
      };
    },
    methods: {
      async handleSubmit() {
        try {
          // API call to update user information with editedUser data
          const response = await fetch('/api/update-user', {
            method: 'POST',
            body: JSON.stringify(this.editedUser),
          });
          const data = await response.json();
  
          // Handle success response and update original user data
          if (data.success) {
            this.$emit('updateUser', this.editedUser); // Emit event to update parent component
            this.$router.push('/account'); // Redirect to account page
          } else {
            // Handle errors
          }
        } catch (err) {
          console.error("Error updating user:", err);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  