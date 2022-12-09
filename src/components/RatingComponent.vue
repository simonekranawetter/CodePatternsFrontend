<!-- eslint-disable prettier/prettier -->
<template>
  <div class="rating">
    <icon-component
      v-if="rating.length < 5"
      class="icons"
      icon="ion:star-outline"
      color="salmon"
      size="18"></icon-component>
    <icon-component
      v-if="rating.length"
      class="icons"
      icon="ion:star"
      color="salmon"
      size="18"></icon-component>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IconComponent from "@/components/IconComponent.vue";

export default defineComponent({
  components: { IconComponent },
  name: "RatingComponent",
  props: {
    rating: {
      type: Object,
      required: true,
    },
  },
});
</script>
