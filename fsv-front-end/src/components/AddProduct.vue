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
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 2rem auto;
    max-width: 600px;
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
  
  .form-group textarea {
    min-height: 100px;
  }
  
  .form-group--error input,
  .form-group--error textarea {
    border-color: red;
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
    .add-product {
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
  