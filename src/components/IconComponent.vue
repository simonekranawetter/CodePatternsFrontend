<!-- SRP and OCP makes it easy to correctly display icons -->
<template>
  <div class="icon">
    <Icon :icon="icon" :color="color" :width="`${size}px`" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "IconComponent",
  props: ["icon", "color", "size"],
  components: { Icon },
});
</script>
