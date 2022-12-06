<template>
  <div class="home">
    <img class="headerpic" src="../assets/header.jpg" alt="" />
    <div class="products-container">
      <h2>Featured Product</h2>
      <div class="product-cards">
        <ProductCard />
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
});
</script>
<style scoped>
.headerpic {
  width: 100%;
}
.products-container {
  width: auto;
  padding-top: 30px;
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
