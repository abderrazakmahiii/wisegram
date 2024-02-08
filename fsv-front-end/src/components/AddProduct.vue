<template>
    <div class="add-product">
      <h1>Add Product</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="product.name" required />
          <span v-if="!product.name">{{ 'Name is required' }}</span>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="product.description" required></textarea>
          <span v-if="!product.description">{{ 'Description is required' }}</span>
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input type="number" id="price" v-model.number="product.price" required />
          <span v-if="!product.price">{{ 'Price is required' }}</span>
        </div>
        <div class="form-group">
          <label for="image">Image:</label>
          <input type="file" id="image" @change="handleImageChange" required />
          <span v-if="!imageSelected">{{ 'Image is required' }}</span>
        </div>
        <div class="form-actions">
          <button type="button" @click="$router.back()">Cancel</button>
          <button type="submit" :disabled="!isFormValid">Confirm</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: '',
          description: '',
          price: null,
          image: null,
        },
        imageSelected: false,
      };
    },
    methods: {
      handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.imageSelected = true;
          this.product.image = file; 
        }
      },
      handleSubmit() {
        if (this.isFormValid) {

        }
      },
      get isFormValid() {
        return (
          this.product.name &&
          this.product.description &&
          this.product.price !== null &&
          this.imageSelected
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .add-product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  .form-group span {
    color: red;
    font-size: 0.8rem;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
  }
  </style>
  