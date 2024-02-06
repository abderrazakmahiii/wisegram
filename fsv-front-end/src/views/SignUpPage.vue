<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="handleSignup">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <button type="submit">Sign Up</button>
        <p v-if="error">{{ error }}</p>
      </form>
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
      async handleSignup() {
        this.error = null;
  
        try {
          const hashedPassword = await bcrypt.hash(this.password, 10); 
          const user = await new User({ email: this.email, password: hashedPassword }).save();
          this.$router.push('/');
        } catch (err) {
          console.error("Error:", err);
          this.error = "Signup failed";
        }
      },
    },
  };
  </script>
  