<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
    <hr>
    <Counter/>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
import Counter from './Counter.vue'
export default {
  components: { ProductList, ShoppingCart, Counter }
}
</script>