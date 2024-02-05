<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img :src="product.imageUrl" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">${{ product.price }}</h3>
      <p>Average rating: {{ product.averageRating }}</p>
      <button id="add-to-cart">Add to Cart</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else />
</template>

<script>
import { products } from '../fake-data';
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: 'ProductsDetailPage',
  
  components: {
    NotFoundPage,
  },

  data() {
    return {
      product: null,
    };
  },
  created() {
    this.product = products.find((p) => p.id === this.$route.params.id);
  },
};
</script>

<style>
h1 {
  color: green;
}
</style>
