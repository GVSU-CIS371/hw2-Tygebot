<template>
  <div :class="['baseBeverage', baseClass]"></div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  currentBase: {
    type: String,
    required: true
  }
});

const baseClass = computed(() => {
  switch (props.currentBase) {
    case 'Black Tea':
      return 'black';
    case 'Green Tea':
      return 'green';
    case 'Coffee':
      return 'brown';
    default:
      return '';
  }
});
// Watch for changes and log 
watch(() => props.currentBase, (newVal, oldVal) => {
  if (oldVal === undefined) {
    console.log(`FROMBASEbaseBeverage prop has been passed in with value: ${newVal}`);
  } else {
    console.log(`FROMBASEbaseBeverage changed from ${oldVal} to ${newVal}`);
  }
});

</script>
<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* border-radius: 0.05em 0.05em 2.2em 2.2em; */
}

.black {
  background-color: black;
}

.green {
  background-color: green;
}

.brown {
  background-color: brown;
}
</style>
