<!-- Single responsibility principle. This component only handles the footer 
  and nothing else, it's also used multiple times so making it it's own 
  component was a good design decision -->
<template>
  <div class="footer">
    <div class="icons-container">
      <icon-component
        class="icons"
        icon="ion:logo-facebook"
        color="grey"
        size="18"
      ></icon-component>
      <icon-component
        class="icons"
        icon="ion:logo-instagram"
        color="grey"
        size="18"
      ></icon-component>
      <icon-component
        class="icons"
        icon="ion:logo-twitter"
        color="grey"
        size="18"
      ></icon-component
      ><icon-component
        class="icons"
        icon="ion:logo-google"
        color="grey"
        size="18"
      ></icon-component>
      <icon-component
        class="icons"
        icon="ion:logo-linkedin"
        color="grey"
        size="18"
      ></icon-component>
    </div>
    <h4>© 2022 Fixxo. All Rights Reserved</h4>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconComponent from "./IconComponent.vue";

export default defineComponent({
  components: { IconComponent },
  name: "FooterComponent",
});
</script>

<style scoped>
.footer {
  border-top: 2px solid lightgrey;
  background-color: #eeeeee;
  width: auto;
  padding-bottom: 20px;
}
.icons-container {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
.icons {
  margin: 5px;
}
h4 {
  color: grey;
}
</style>
