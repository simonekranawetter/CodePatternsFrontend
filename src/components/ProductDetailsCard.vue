<!-- OCP makes it possible to add any additonal info we might want to add in 
  the future to the detailed product view -->
<template>
  <div class="container">
    <button class="headlines">Description</button>
  </div>
  <div class="accordion">
    <div class="hidden-p">
      <p id="description" class="hidden">{{ product.description }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
.container {
  display: flex;
  align-content: center;
}
.accordion {
  padding-left: 30px;
  display: flex;
}
.headlines,
.userreviews {
  color: grey;
  display: flex;
}
button {
  border: none;
  color: grey;
  background-color: white;
  font-size: small;
  padding: 20px 30px 20px 0px;
  border-bottom: grey 1px solid;
}
button:first-child {
  margin-left: 30px;
}
button :active {
  color: salmon;
  border-bottom: salmon 1px solid;
}
.hidden-p {
  color: grey;
  text-align: left;
}
</style>
