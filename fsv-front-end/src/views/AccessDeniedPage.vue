<template>
    <div class="access-denied">
      <h1>Access Denied</h1>
      <p>You are not authorized to access this page.</p>
      <p>Please consider:</p>
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
    text-align: center;
    padding: 20px;
  }
  </style>
  