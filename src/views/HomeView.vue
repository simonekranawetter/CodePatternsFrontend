<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home">
    <img class="headerpic" src="../assets/header.jpg" alt="" />
    <h2>Featured Products</h2>
    <div class="products-container">
      <div class="product-cards">
        <ProductCard
          class="product"
          v-for="product in products.slice(0, 8)"
          :key="product.id"
          :product="product" />
      </div>
    </div>
    <div class="toppicks-items">
      <img src="../assets/LetsBe.svg" alt="" />
      <img class="pamela" src="../assets/PamelaReifs.svg" alt="" />
    </div>
    <div class="sales">
      <div class="sales-container">
        <div class="sales-details">
          <div class="sales-img">
            <h2>2 FOR USD $29</h2>
            <button class="sales-btn">FLASH SALE</button>
          </div>
        </div>
        <div class="sales-products">
          <ProductCard
            v-for="product in products.slice(0, 4)"
            :key="product.id"
            :product="product" />
        </div>
      </div>
      <div class="sales-container">
        <div class="sales-products">
          <ProductCard
            v-for="product in products.slice(4, 8)"
            :key="product.id"
            :product="product" />
        </div>
        <div class="sales-details">
          <div class="sales-img">
            <h2>2 FOR USD $49</h2>
            <button class="sales-btn">FLASH SALE</button>
          </div>
        </div>
      </div>
    </div>
    <div class="support">
      <img src="@/assets/Support.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "@/components/ProductCard.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: null,
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    async getAllProducts() {
      //TODO here too!
      const url = new URL(
        `https://localhost:7224/api/` + "Products"
      ).toString();
      try {
        await fetch(url).then((response) =>
          response.json().then((data) => (this.products = data))
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (ex: any) {
        console.error(ex.message);
      }
    },
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
  max-height: max-content;
}
h2 {
  text-align: center;
}
.toppicks-items {
  display: inline-flex;
  justify-content: space-evenly;
  align-self: center;
}
.toppicks-items .pamela {
  padding-left: 30px;
}
.sales {
  padding: 30px;
  display: grid;
  justify-content: center;
}
.sales-container {
  display: flex;
  margin-bottom: 60px;
}
.sales-details {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  width: 800px;
  padding-top: 30px;
}
.sales-products {
  display: grid;
  justify-content: center;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}
.sales-img {
  color: white;
  font-weight: bolder;
  font-size: xx-large;
  padding-bottom: 40px;
}
.sales-btn {
  cursor: pointer;
  font-family: "Times New Roman", Times, serif;
  font-size: large;
  padding: 20px 40px;
  border: 3px solid black;
  font-weight: bolder;
  background: white;
}
.support {
  padding-bottom: 60px;
}
</style>
