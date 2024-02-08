<template>
    <div class="view-product">
      <h1>{{ product.name }}</h1>
      <div class="product-details">
        <img :src="product.image" alt="Product image" />
        <div class="info">
          <p><b>Description:</b> {{ product.description }}</p>
          <p><b>Price:</b> {{ product.price }}</p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: null,
      };
    },
    mounted() {
      const productId = this.$route.params.id;
      this.fetchProduct(productId);
    },
    methods: {
      async fetchProduct(productId) {
        const response = await fetch(`/api/products/${productId}`);
        this.product = await response.json();
      },
    },
  };
  </script>
  
  <style scoped>
  .view-product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .product-details {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .product-details img {
    max-width: 200px;
  }
  
  .info {
    flex: 1;
  }
  
  </style>
  