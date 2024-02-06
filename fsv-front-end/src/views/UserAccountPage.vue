<template>
    <div class="user-account-page">
      <h1>Hello, {{ user?.name }}!</h1>
  
      <div v-if="user">
        <p>Your email: {{ user.email }}</p>
        <p>Your birthdate: {{ user.birthdate }}</p>
        <p>Your phone number: {{ user.phone }}</p>
  
        <router-link to="/edit-account">Edit Account</router-link>
        <button @click="showConfirm('deleteAccount')">Delete Account</button>
      </div>
  
      <div v-else>
        <p>User not found or not logged in.</p>
        <router-link to="/sign-in">Sign In</router-link>
      </div>
  
      <ConfirmationModal v-model="confirmationActive" :message="confirmationMessage" @confirm="handleConfirmation" />
    </div>
  </template>
  
  <script>
  import ConfirmationModal from './ConfirmationModal.vue'; // Import ConfirmationModal component
  
  export default {
    components: {
      ConfirmationModal,
    },
    data() {
      return {
        user: null,
        confirmationActive: false,
        confirmationMessage: '',
      };
    },
    mounted() {
      this.fetchUserData();
    },
    methods: {
      async fetchUserData() {
      },
      showConfirm(action) {
        switch (action) {
          case 'deleteAccount':
            this.confirmationMessage = 'Are you sure you want to delete your account?';
            this.confirmationActive = true;
            break;
        }
      },
      handleConfirmation(confirmed) {
        if (confirmed) {
          this.deleteAccount();
        } else {
          this.confirmationActive = false;
        }
      },
      async deleteAccount() {
        try {
          // Make API call to delete account
          await fetch('/api/delete-account', { method: 'DELETE' });
  
          // Redirect to sign-in page to handle success
          this.$router.push('/sign-in');
        } catch (err) {
          console.error("Error deleting account:", err);
          // Handle error appropriately
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  