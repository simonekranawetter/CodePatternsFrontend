<template>
  <div class="navbar-container">
    <div class="logo">
      <h1>Fixxo.</h1>
    </div>
    <div class="router-links">
      <div v-for="route in routes" :key="route.routeId">
        <router-link
          class="link"
          :to="route.route"
          active-class="link-active"
          >{{ route.linkTitle }}</router-link
        >
      </div>
    </div>
    <div class="icons-container">
      <icon-component
        class="icons"
        icon="ion:search-outline"
        color="black"
        size="18"
      ></icon-component>
      <icon-component
        class="icons"
        icon="ion:git-compare-outline"
        color="black"
        size="18"
      ></icon-component>
      <icon-component
        class="icons"
        icon="ion:heart-outline"
        color="black"
        size="18"
      ></icon-component>
      <icon-component
        class="icons"
        icon="ion:bag-outline"
        color="black"
        size="18"
      ></icon-component>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconComponent from "@/components/IconComponent.vue";
import { UserRoutes } from "@/controllers/UserRoutes";

export default defineComponent({
  components: { IconComponent },
  name: "NavbarComponent",
  computed: {
    routes() {
      return UserRoutes;
    },
  },
});
</script>
<style scoped>
.navbar-container {
  background-color: #eeeeee;
  width: auto;
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 20px;
}
.logo {
  font-weight: 900;
  font-size: larger;
  padding-left: 20px;
}
.router-links,
.icons-container {
  display: flex;
  align-items: center;
}
.link {
  text-decoration: none;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
}
.link-active {
  color: salmon;
}
.icons {
  align-self: center;
  box-shadow: 0px 16px 24px 2px rgba(0, 0, 0, 0.09),
    0px 6px 30px 5px rgba(0, 0, 0, 0.06), 0px 8px 10px -7px rgba(0, 0, 0, 0.01);
  border-radius: 100%;
  padding: 10px 10px 7px 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
