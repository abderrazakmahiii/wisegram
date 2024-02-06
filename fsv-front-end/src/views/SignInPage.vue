<template>
    <div>
      <h1>Sign In</h1>
      <form @submit.prevent="handleLogin">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <button type="submit">Sign In</button>
      </form>
      <p v-if="error">{{ error }}</p>
      <p>
        Don't have an account? <router-link to="/signup">Sign up here</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: null,
      };
    },
    methods: {
      handleLogin() {
        this.error = null;
  
        fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, password: this.password }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
            } else {
              this.error = data.error;
            }
          })
          .catch((err) => {
            console.error("Error:", err);
            this.error = "Internal server error";
          });
      },
    },
  };
  </script>
  