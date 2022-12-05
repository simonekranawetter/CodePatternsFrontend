<template>
  <div class="product-card">
    <div class="product-img">
      <img src="" alt="" />
    </div>
    <div class="product-info">
      <h4>Category</h4>
      <h3>Name</h3>
      <div class="rating">
        <icon-component
          class="icons"
          icon="ion:star-outline"
          color="salmon"
          size="18"
        ></icon-component>
        <icon-component
          class="icons"
          icon="ion:star"
          color="salmon"
          size="18"
        ></icon-component>
      </div>
      <h3>Price</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconComponent from "@/components/IconComponent.vue";

export default defineComponent({
  components: { IconComponent },
  name: "ProductCard",
});
</script>

<style scoped>
.product-img {
  height: 160px;
  padding: 0px;
  background-color: lightgrey;
}
.product-card {
  width: 250px;
  margin: 30px;
  border: 1px solid orangered;
}
.product-info {
  display: block;
  text-align: left;
  line-height: 0.5;
  border: 1px solid blue;
}
h4 {
  font-weight: lighter;
  font-size: smaller;
}
.rating {
  display: flex;
}
</style>
