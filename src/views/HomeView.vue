<template>
  <div class="home">
    <ProductCard msg="Welcome to Your Vue.js + TypeScript App" />
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
