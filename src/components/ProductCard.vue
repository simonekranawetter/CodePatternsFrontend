<!-- eslint-disable prettier/prettier -->
<template>
  <div
    class="product-card"
    @click="() => $router.push('/products/' + product.id)" 
    >
    <div class="product-img">
      <img src="" alt="" />
    </div>
    <div class="product-info">
      <h4>{{ product.category }}</h4>
      <h3>{{ product.productName }}</h3>
      <RatingComponent v-bind:rating="product.rating" />
      <h3>{{ product.price }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RatingComponent from "@/components/RatingComponent.vue";

export default defineComponent({
  components: { RatingComponent },
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-img {
  height: 200px;
  width: 250px;
  background-color: whitesmoke;
}
.product-card {
  width: 250px;
  padding: 20px;
}
.product-card :hover {
  cursor: pointer;
}
.product-info {
  display: block;
  text-align: left;
  line-height: 0.5;
  padding: 10px;
}
h4 {
  font-weight: lighter;
  font-size: smaller;
}
.rating {
  display: flex;
}
</style>
