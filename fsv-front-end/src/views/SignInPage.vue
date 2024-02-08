<template>
  <div class="sign-in">
    <h1>Sign In</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
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

      

      fetch("/api//sign-in/:id", {
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

<style>
.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="email"],
input[type="password"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  margin-top: 1rem;
  transition: all 0.2s ease-in-out;
}

button:hover {
  background-color: #0062cc;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 1rem;
}

@media only screen and (max-width: 768px) {
  .sign-in {
    width: 90%;
  }
}

</style>