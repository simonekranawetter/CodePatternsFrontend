<template>
  <routers-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RoutersView from "./views/RoutersView.vue";
export default defineComponent({
  components: { RoutersView },
  name: "App",
});
</script>
<style>
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>
