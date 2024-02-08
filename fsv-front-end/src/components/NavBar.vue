<template>
  <div id="nav-bar">
    <router-link to="/products" id="products-link">
      <h1>Wisegram</h1>
    </router-link>

    <template v-if="isAuthenticated && isAdmin">
      <router-link to="/productsAdmin/" id="products-link-admin">
        Products
      </router-link>
      <router-link to="/usersAdmin" id="users-link">
        Users
      </router-link>
    </template>

    <template v-else>
      <router-link to="/cart" id="cart-link">
        <button>Cart</button>
      </router-link>
    </template>

    <div id="account-menu">
      <button v-if="isAuthenticated" @click="toggleAccountDropdown">
        <span class="user-icon">...</span>
        <span v-if="user?.displayName">{{ user.displayName }}</span>
      </button>

      <div v-if="isAuthenticated && isAccountDropdownOpen" id="account-dropdown">
        <button @click="goToAccountPage">Account</button>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { authService } from '../services/auth.js'; // Import auth service

export default {
  name: 'NavBar',
  data() {
    return {
      isAuthenticated: false,
      isAccountDropdownOpen: false,
      user: null,
    };
  },
  mounted() {
    // Check authentication status and fetch user data on component mount
    this.isAuthenticated = authService.isAuthenticated();
    if (this.isAuthenticated) {
      this.fetchUserData();
    }
  },
  methods: {
    toggleAccountDropdown() {
      this.isAccountDropdownOpen = !this.isAccountDropdownOpen;
    },
    goToAccountPage() {
      this.isAccountDropdownOpen = false;
      this.$router.push('/account/:id');
    },
    logout() {
      authService.logout();
      this.$router.push('/sign-up'); 
    },
    async fetchUserData() {
    
      const response = await fetch('/api/user');
      this.user = await response.json();
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Montserrat:wght@500&display=swap');

#nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

#nav-bar h1 {
  font-family: 'Dancing Script', cursive;
  color: #000;
  margin: 0;
  font-size: 1.5rem; 
}

#nav-bar a,
#nav-bar button {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem; 
  text-transform: uppercase; 
  font-family: 'Montserrat', sans-serif;
  transition: all 0.2s ease-in-out;
}

#nav-bar a:hover,
#nav-bar button:hover {
  color: #007bff;
}

#nav-bar button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

#admin-links {
  display: flex;
  gap: 1rem;
}

@media only screen and (max-width: 768px) {
  #nav-bar {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  #nav-bar h1 {
    font-size: 1.2rem;
  }

  #nav-bar a,
  #nav-bar button {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }

  #admin-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
