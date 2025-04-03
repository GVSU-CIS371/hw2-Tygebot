<template>
  <div>
    <Beverage 
      :isIced="currentTemp === 'Cold'" 
      :currentCreamer="currentCreamer.name" 
      :currentSyrup="currentSyrup.name" 
      :currentBase="currentBase.name" 
    />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in bases" :key="base">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base}`"
              :value="base"
              v-model="currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
    </ul>
    <div>
      <label for="beverageName">Name:</label>
      <input
        id="beverageName"
        type="text"
        v-model="beverageName"
        placeholder="Enter beverage name"
      />
      <button @click="makeBeverageAction">Make Beverage</button>
    </div>
    <div id="beverage-container">
      <h3>Saved Beverages</h3>
      <ul>
        <li v-for="beverage in userRecipes" :key="beverage.id">
          <button @click="showBeverageAction(beverage.id)">
            {{ beverage.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { storeToRefs } from "pinia";

const beverageStore = useBeverageStore();
const {
  temps, 
  bases,
  creamers,
  syrups,
  currentTemp,
  currentBase,
  currentCreamer,
  currentSyrup,
  beverageName,
  userRecipes,
} = storeToRefs(beverageStore);

const makeBeverageAction = beverageStore.makeBeverage;
const showBeverageAction = beverageStore.showBeverage;
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
