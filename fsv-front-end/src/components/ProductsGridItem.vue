<template>
    <div 
    class="product-item">
    <img v-bind:src="product.imageUrl" /> 
    <h3 class="product-name">{{ product.name }}</h3>  
    <p class="product-price">${{ product.price }}</p>
    <router-link v-bind:to="'/products/' + product.id">
    <button>View details</button>
</router-link>
</div>
</template>

<script>
export default {
    name: 'ProductsGridItem',
    props: ['product'],
}
</script>

<style>

</style>