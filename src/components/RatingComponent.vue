<!-- SRP, reused asset all over the site, so made it it's own component
  so I can handle the computation here to make it easier to find as well -->
<template>
  <div class="rating">
    <icon-component
      v-for="star in convertToArray(rating)"
      :key="star"
      :rating="rating"
      class="icons"
      icon="ion:star"
      color="salmon"
      size="18"
    ></icon-component>
    <icon-component
      v-for="star in fillUpStars(rating)"
      :key="star"
      :rating="rating"
      class="icons"
      icon="ion:star-outline"
      color="salmon"
      size="18"
    ></icon-component>
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
      type: Number,
      required: true,
    },
  },
  methods: {
    convertToArray(rating: number): number[] {
      return Array(rating);
    },
    fillUpStars(rating: number) {
      const fillUpStarsArray = 5 - this.convertToArray(rating).length;
      return Array(fillUpStarsArray);
    },
  },
});
</script>
