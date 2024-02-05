<template>
    <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <ProductsList :products="cartItems" />
    <h3 id="total-price">${{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to checkout</button>
    </div>
</template>

<script>
import {cartItems} from '../fake-data';
import ProductsList from '../components/ProductsList.vue';
export default {
    name: 'ShoppingCartPage',
    components: {
        ProductsList,
    },
    data () {
        return {
            cartItems,
        }
    },
    computed: {
    totalPrice() {
        return this.cartItems.reduce(
            (sum, item) => sum + Number(item.price),
            0,
        );
    }
}

};
</script>

<style>
h1 {
    color: green;
}
</style>