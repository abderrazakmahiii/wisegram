import axios from 'axios';

export const authService = {
  // Authentication functions
  async signup(email, password) {
    try {
      const response = await axios.post('/api/signup', { email, password });
      return response.data.success;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  },

  async login(email, password) {
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.data.success) {
        const token = response.data.token;
        this.setToken(token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  logout() {
    this.removeToken();
  },

  // Authorization functions
  isAuthenticated() {
    return !!this.getToken(); 
  },

  isAdmin() {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken = jwt.decode(token, process.env.JWT_SECRET); // Assuming JWT and secret
        return decodedToken.isAdmin;
      } catch (error) {
        console.error('Error decoding token:', error);
        return false;
      }
    } else {
      return false;
    }
  },

  // Utility functions
  getToken() {
    return localStorage.getItem('token');
  },

  setToken(token) {
    localStorage.setItem('token', token);
  },

  removeToken() {
    localStorage.removeItem('token');
  },
};
