<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home">
    <img class="headerpic" src="../assets/header.jpg" alt="" />
    <h2>Featured Products</h2>
    <div class="products-container">
      <div class="product-cards">
        <ProductCard
          v-for="product in products.slice(0,8)"
          :key="product.id"
          :product="product" />
      </div>
    </div>
    <div class="toppicks-items">
      <img src="../assets/LetsBe.svg" alt="" />
      <img class="pamela" src="../assets/PamelaReifs.svg" alt="" />
    </div>
    <div class="sales">
      <img src="../assets/TwoFor29.svg" alt="" />
      <img src="../assets/TwoFor49.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "@/components/ProductCard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 11.2,
          category: "Batman",
        },
      ],
    };
  },
});
</script>
<style scoped>
.headerpic {
  width: 100%;
}
.products-container {
  width: auto;
  padding-top: 30px;
  display: flex;
  justify-content: center;
}
.product-cards {
  display: grid;
  justify-content: center;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 50% 50%;
  max-width: max-content;
  border: 1px solid greenyellow;
  max-height: max-content;
}
h2 {
  text-align: center;
}
.toppicks-items {
  width: auto;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  padding: 30px;
}
.toppicks-items .pamela {
  padding-left: 30px;
}
.sales {
  padding: 30px;
  display: block;
}
.sales img {
  width: auto;
  padding-top: 30px;
}
</style>
