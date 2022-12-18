<!-- eslint-disable prettier/prettier -->
<template>
  <div
    class="product-card"
    @click="() => $router.push('/products/' + product.id)">
    <div class="product-img">
      <img :src="product.picture" />
    </div>
    <div class="product-info">
      <h4>{{ product.category }}</h4>
      <h3>{{ product.productName }}</h3>
      <RatingComponent v-bind:rating="product.rating" />
      <div class="pricing">
        <h3 v-if="product.salesPrice !== undefined" class="hidden">
          $ {{ product.price }}
        </h3>
        <h3 v-if="product.salesPrice !== undefined">
          $ {{ product.salesPrice }}
        </h3>
        <h3 v-if="product.salesPrice === undefined">$ {{ product.price }}</h3>
      </div>
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
.product-img img {
  height: 200px;
  max-width: 250px;
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
.pricing {
  display: flex;
}
.hidden {
  text-decoration: line-through;
  padding-right: 10px;
  color: grey;
}
</style>
