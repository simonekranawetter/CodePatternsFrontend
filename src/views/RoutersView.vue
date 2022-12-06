<template>
  <navbar-component />
  <router-view />
  <footer-component />
</template>
<script lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoutersView",
  components: { NavbarComponent, FooterComponent },
});
</script>
