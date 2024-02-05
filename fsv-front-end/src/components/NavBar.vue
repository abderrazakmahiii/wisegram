<template>
    <div id="nav-bar">
        <router-link to="/products" id="products-link">
            <h1>Wisegram</h1>
        </router-link>
        <router-link to="/cart" id="cart-link">
            <button>Shopping Cart</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>

</style>