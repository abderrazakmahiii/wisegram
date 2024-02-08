<template>
    <div class="edit-product">
      <h1>Edit Product</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="product.name" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="product.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model.number="product.price" required />
        </div>
        <div class="form-actions">
          <button type="button" @click="$router.back()">Cancel</button>
          <button type="submit" :disabled="!isModified">Confirm</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {},
        originalProduct: {},
      };
    },
    mounted() {
      const productId = this.$route.params.id;
      this.fetchProduct(productId);
    },
    methods: {
      async fetchProduct(productId) {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
          return;
        }
        this.product = await response.json();
        this.originalProduct = JSON.parse(JSON.stringify(this.product));
      },
      handleSubmit() {
      },
      get isModified() {
        return !JSON.stringify(this.product) === JSON.stringify(this.originalProduct);
      },
    },
  };
  </script>
  
  <style scoped>
  .edit-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;
  font-family: sans-serif;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group span {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
}

.secondary-button {
  background-color: #ccc;
  color: #333;
}

@media only screen and (max-width: 768px) {
  .edit-product {
    max-width: 90%;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.8rem;
  }

  .button {
    font-size: 0.8rem;
  }
}

  </style>
  