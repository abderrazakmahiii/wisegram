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
    <button v-if="isAuthenticated" @click="logout">Log Out</button>
  </div>
</template>

<script>
import { authService } from '../services/auth.js'; // Import auth service

export default {
  name: 'NavBar',
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    // Check authentication status on component mount
    this.isAuthenticated = authService.isAuthenticated();
  },
  methods: {
    logout() {
      authService.logout();
      // Redirect to login page after logout
      this.$router.push('/sign-up');
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Montserrat:wght@500&display=swap');

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
