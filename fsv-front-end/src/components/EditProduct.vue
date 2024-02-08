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
  </style>
  