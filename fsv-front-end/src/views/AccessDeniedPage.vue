<template>
  <div class="access-denied">
    <h2>Access Denied</h2>
    <p>You are not authorized to access this page.</p>
    <ul>
      <li>Signing in to your account if you have one.</li>
      <li>Contacting the website administrator if you believe you have access.</li>
    </ul>
    <router-link to="/" class="button">Go Home</router-link>
  </div>
</template>

  
  <script>
  export default {
    name: "AccessDenied",
  };
  </script>
  
  <style scoped>
 .access-denied {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: sans-serif; 
  max-width: 600px;
  margin: 0 auto; 
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  line-height: 1.5;
}

ul {
  list-style: disc;
  margin: 1rem 0;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

.button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s ease-in-out; 
}

.button:hover {
  background-color: #0062cc; 
}

@media only screen and (max-width: 768px) {
  .access-denied {
    font-size: 0.9rem;
  }
}

  </style>
  