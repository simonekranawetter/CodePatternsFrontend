<template>
  <div class="product">
    <div class="container">
      <div class="sales">
        <h2>Get 25% OFF at the Fixxo Selection - Shop Now!</h2>
      </div>
      <div class="product-images">
        <img class="focus-img" src="" alt="whoop whoop" />
        <div class="other-images">
          <img class="small-img" src="" alt="" />
          <img class="small-img" src="" alt="" />
          <img class="small-img" src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ProductComponent",
  mounted() {
    const route = useRoute();
    console.log(route.params.name);
  },
});
</script>
<style scoped>
.container {
  width: 100%;
  margin: 60px;
}
.sales {
  justify-content: center;
}
.focus-img,
.other-images,
.small-img {
  width: 50%;
  background-color: grey;
}
</style>
