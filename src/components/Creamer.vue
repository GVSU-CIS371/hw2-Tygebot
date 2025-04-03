<template>
  <div class="froth">
    <div v-for="n in 5" :key="n" :class="['foam', creamerClass]"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  currentCreamer: {
    type: String,
    required: true
  }
});

const creamerClass = computed(() => {
  switch (props.currentCreamer) {
    case 'Milk':
      return 'milk';
    case 'Cream':
      return 'cream';
    case 'Half & Half':
      return 'half-and-half';
    default:
      return '';
  }
});
</script>

<style lang="scss" scoped>
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  animation: pour-tea 2s 2s forwards;
}

.foam {
  display: block;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
}

.milk {
  background-color: #f0e5cf;
}

.cream {
  background-color: #fffdd0;
}

.half-and-half {
  background-color: #f5deb3;
}

.foam:nth-child(1) {
  top: 0px;
  left: -3px;
}

.foam:nth-child(2) {
  top: 0px;
  left: 55px;
}

.foam:nth-child(3) {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  top: 3px;
  left: 30px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  border-radius: 45px;
  top: 5px;
  right: -2px;
}

.foam:nth-child(5) {
  top: 2px;
  right: 10px;
}
</style>
