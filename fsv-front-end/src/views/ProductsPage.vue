<template>
    <div id="page-wrap">
        <ProductsGrid :products="products" />
</div>
</template>

<script>
import { products } from '../fake-data.js';
import ProductsGrid from '../components/ProductsGrid.vue';
export default {
    name: 'ProductsPage',
    components: {
        ProductsGrid,
    },
    data() {
        return {
            products,
        };
    }
};
</script>

<style>
h1 {
    color: red;
}
</style>