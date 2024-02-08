<template>
    <div class="admin-products">
      <h1>Products</h1>
      <button v-if="isAdmin" @click="handleAddProduct">Add Product</button>
      <table class="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product._id">
            <td>{{ product._id }}</td>
            <td>{{ product.name }}</td>
            <td>
              <button @click="handleViewProduct(product._id)">View</button>
              <button @click="handleEditProduct(product._id)">Edit</button>
              <ConfirmationModal
                :message="`Are you sure you want to delete product ${product.name}?`"
                @confirm="handleDeleteProduct(product._id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import ConfirmationModal from './ConfirmationModal.vue';
  
  export default {
    components: {
      ConfirmationModal,
    },
    data() {
      return {
        products: [],
        isAdmin: false,
      };
    },
    mounted() {
      this.fetchProducts();
      this.isAdmin = this.$store.getters.isAdmin;
    },
    methods: {
      async fetchProducts() {
        const response = await fetch('/api/products', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) {
          return;
        }
        this.products = await response.json();
      },
      handleAddProduct() {
        this.$router.push('/admin/add-product');
      },
      handleViewProduct(productId) {
        this.$router.push(`/product/${productId}`);
      },
      handleEditProduct(productId) {
        this.$router.push(`/admin/edit-product/${productId}`);
      },
      async handleDeleteProduct(productId) {
        const response = await fetch(`/api/products/${productId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) {
          return;
        }
        this.products = this.products.filter((p) => p._id !== productId);
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-products {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .products-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .products-table th,
  .products-table td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  </style>
  