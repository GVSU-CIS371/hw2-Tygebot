<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="currentCreamer !== 'No Creamer'" :currentCreamer="currentCreamer" />
      </template>
      <template v-slot:mid>
        <Syrup v-if="currentSyrup !== 'No Syrup'" :currentSyrup="currentSyrup" />
      </template>
      <template v-slot:bottom>
        <Base :currentBase="currentBase" />
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  currentCreamer: string;
  currentSyrup: string;
  currentBase: string;
};
defineProps<Props>();
</script>
