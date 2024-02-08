<template>
  <div class="user-account-page">
    <h1>Hello, {{ user?.name }}!</h1>

    <div v-if="user">
      <p>Email: {{ user.email }}</p>
      <p>Birthdate: {{ user.birthdate | date }}</p>
      <p>Phone number: {{ user.phone | phone }}</p>

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
import ConfirmationModal from './ConfirmationModal.vue';

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
      try {
        const response = await fetch('/api/user');
        const data = await response.json();
        this.user = data;
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
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
        const response = await fetch('/api/delete-account', {
          method: 'DELETE',
        });

        if (response.ok) {
          this.$router.push('/sign-in/:id');
        } else {
          console.error("Error deleting account:", await response.text());
        }
      } catch (err) {
        console.error("Error deleting account:", err);

      }
    },
  },
};
</script>
  
  <style scoped>
  </style>
  