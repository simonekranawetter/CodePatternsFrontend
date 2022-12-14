<!-- eslint-disable prettier/prettier -->
<template>
  <div class="product">
    <div class="sales">
      <h2>Get 25% OFF at the Fixxo Selection - Shop Now!</h2>
    </div>
    <div class="container">
      <div class="product-images">
        <img class="focus-img" src="" alt="" />
        <div class="other-images">
          <img class="small-img" src="" alt="" />
          <img class="small-img" src="" alt="" />
          <img class="small-img" src="" alt="" />
        </div>
      </div>
      <div class="details-container">
        <h2>{{ product.productName }}</h2>
        <div class="brand">
          <h4>{{ product.id }}</h4>
          <h4>BrandName</h4>
        </div>
        <div class="rating">
          <RatingComponent v-bind:rating="product.rating" />
        </div>
        <h2>{{ product.price }}</h2>
        <p>{{product.description}}</p>
        <div class="size">
          <h4>Size</h4>
          <button class="sizebtn">{{product.size}}</button>
          <button class="sizebtn">M</button>
          <button class="sizebtn">L</button>
          <button class="sizebtn">XL</button>
        </div>
        <div class="color">
          <h4>Color</h4>
          <div class="dropdown">
            <button class="dropbtn">Choose an Option</button>
            <icon-component
              class="arrow-down"
              icon="ion:ios-arrow-down"
              color="grey"
              size="18"></icon-component>
            <div class="dropdown-content">
              <a href="">{{ product.colors }}</a>
            </div>
          </div>
        </div>
        <div class="socials">
          <h4>Share</h4>
          <div class="icons-container">
            <icon-component
              class="icons"
              icon="ion:logo-facebook"
              color="black"
              size="18"></icon-component>
            <icon-component
              class="icons"
              icon="ion:logo-instagram"
              color="black"
              size="18"></icon-component>
            <icon-component
              class="icons"
              icon="ion:logo-twitter"
              color="black"
              size="18"></icon-component
            ><icon-component
              class="icons"
              icon="ion:logo-google"
              color="black"
              size="18"></icon-component>
            <icon-component
              class="icons"
              icon="ion:logo-linkedin"
              color="black"
              size="18"></icon-component>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="product-details">
        <ProductDetailsCard v-bind:product="product" :key="product.id" />
        <h3>Related Products</h3>
        <div class="related-products">
          <ProductCard
            v-for="product in products.slice(0, 5)"
            :key="product.id"
            :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import RatingComponent from "@/components/RatingComponent.vue";
import IconComponent from "@/components/IconComponent.vue";
import ProductDetailsCard from "@/components/ProductDetailsCard.vue";
import ProductCard from "@/components/ProductCard.vue";

export default defineComponent({
  components: {
    RatingComponent,
    IconComponent,
    ProductDetailsCard,
    ProductCard,
  },
  name: "ProductComponent",
  data() {
    return {
      products: [
        {
          id: 223423,
          rating: 4,
          productName: "Hi Mom",
          price: 9.2,
          category: "Batman",
        },
        {
          id: 223423,
          rating: 2,
          productName: "Hi Mom",
          price: 1187.2,
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
      product: {
        id: this.$route.fullPath.slice(10),
        rating: 3,
        productName: "Hi Mom",
        description: "I am the best product ever!",
        price: 11.2,
        size: "S",
        category: "Nice things",
        colors: "blue",
      },
    };
  },
  methods: {},
  mounted() {
    const route = useRoute();
    console.log(route.params.name);
  },
});
</script>
<style scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sales {
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
}
.other-images {
  display: flex;
  justify-content: space-between;
}
.small-img {
  margin: 10px;
  padding: 10px;
  background-color: grey;
  height: 150px;
  width: 150px;
}
.focus-img {
  margin: 10px;
  padding: 10px;
  background-color: grey;
  height: 500px;
  width: 550px;
}
.details-container {
  max-width: 500px;
  margin: 20px;
  padding: 10px;
  display: block;
  text-align: left;
}
.brand {
  display: inline-flex;
}
.rating {
  display: flex;
}
.size,
.color {
  display: flex;
  align-items: center;
  padding-top: 20px;
}
h4 {
  padding-right: 20px;
  font-weight: lighter;
}
.sizebtn {
  padding: 15px;
  margin: 20px;
  border: 2px solid black;
}
.dropbtn {
  color: grey;
  background-color: white;
  border: none;
  cursor: pointer;
  padding-left: 30px;
}
.dropdown {
  position: relative;
  display: inline-flex;
  border: 2px solid black;
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 70px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.arrow-down {
  padding: 20px;
}
.socials {
  padding-top: 20px;
  display: flex;
  align-items: center;
}
.icons-container {
  display: inline-flex;
  justify-content: center;
}
.icons {
  display: flex;
  background-color: lightgrey;
  padding: 5px;
  margin-right: 10px;
  border-radius: 100%;
  justify-content: center;
}
h3 {
  text-align: left;
  padding-left: 30px;
}
.related-products {
  display: flex;
}
</style>
