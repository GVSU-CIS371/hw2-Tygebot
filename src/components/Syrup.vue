<template>
  <div :class="['syrup', syrupClass]"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  currentSyrup: {
    type: String,
    required: true
  }
});

const syrupClass = computed(() => {
  switch (props.currentSyrup) {
    case 'Vanilla':
      return 'vanilla';
    case 'Caramel':
      return 'caramel';
    case 'Hazelnut':
      return 'hazelnut';
    default:
      return '';
  }
});
</script>

<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}

.vanilla {
  background-color: #f3e5ab;
}

.caramel {
  background-color: #c68e17;
}

.hazelnut {
  background-color: #d2b48c;
}
</style>
