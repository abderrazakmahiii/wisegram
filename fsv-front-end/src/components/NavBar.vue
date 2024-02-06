<template>
    <div id="nav-bar">
        <router-link to="/products" id="products-link">
            <h1>Wisegram</h1>
        </router-link>
        <router-link to="/cart" id="cart-link">
            <button>Cart</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Montserrat:wght@500&display=swap');

#nav-bar {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    background-color: blue;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid rgb(219, 219, 219);
}

#nav-bar h1 {
    font-family: 'Dancing Script', cursive;
    color: black;
}

#products-link {
    text-decoration: none;
}

button {
    background-color: black;
    color: white;
    width: 120px;
    height: 45px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    border: none;
}

button:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    cursor: pointer;
    transition: .5s;
}

button:not(:hover) {
    transition: .5s;
}

</style>