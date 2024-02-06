// services/auth.js
export const authService = {
    isAuthenticated() {
      return localStorage.getItem('token') !== null;
    },
  
    login(email, password) {
      // Send login request to server
      return fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem('token', data.token); // Store token
            return true;
          } else {
            return false;
          }
        })
        .catch((error) => {
          console.error('Login error:', error);
          return false;
        });
    },
  
    logout() {
      localStorage.removeItem('token');
    },
  };
  