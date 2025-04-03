import { defineStore } from "pinia";
import { ref, Ref } from "vue";

interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

interface CreamerType {
  id: string;
  name: string;
  color: string;
}

interface SyrupType {
  id: string;
  name: string;
  color: string;
}

interface BeverageRecipe {
  id: string;
  name: string;
  base: string;
  creamer: string;
  syrup: string;
  temperature: string;
}

export const useBeverageStore = defineStore("beverageStore", () => {
  // Data from beverage.ts
  const temps = ref<string[]>(["Hot", "Cold"]);
  const bases = ref<BaseBeverageType[]>([
    { id: "b1", name: "Black Tea", color: "#8B4513" },
    { id: "b2", name: "Green Tea", color: "#C8E6C9" },
    { id: "b3", name: "Coffee", color: "#6F4E37" },
  ]);
  const creamers = ref<CreamerType[]>([
    { id: "c1", name: "No Cream", color: "transparent" },
    { id: "c2", name: "Milk", color: "AliceBlue" },
    { id: "c3", name: "Cream", color: "#F5F5DC" },
    { id: "c4", name: "Half & Half", color: "#FFFACD" },
  ]);
  const syrups = ref<SyrupType[]>([
    { id: "s1", name: "No Syrup", color: "#c6c6c6" },
    { id: "s2", name: "Vanilla", color: "#FFEFD5" },
    { id: "s3", name: "Caramel", color: "#DAA520" },
    { id: "s4", name: "Hazelnut", color: "#6B4423" },
  ]);

  // State
  const currentTemp = ref("Cold");
  const currentBase = ref<string>("Coffee");
  const currentCreamer = ref<string>("No Creamer");
  const currentSyrup = ref<string>("No Syrup");
  const beverageName = ref<string>("");
  const userRecipes: Ref<BeverageRecipe[]> = ref([]);
  const selectedBeverage = ref<BeverageRecipe | null>(null);

  const addRecipe = (recipe: BeverageRecipe) => {
    userRecipes.value.push(recipe);
  };

  const makeBeverage = () => {
    if (!beverageName.value || !currentBase.value || !currentCreamer.value || !currentSyrup.value) {
      console.error("All fields must be selected to create a beverage.");
      return;
    }

    const newRecipe: BeverageRecipe = {
      id: Date.now().toString(),
      name: beverageName.value,
      base: currentBase.value,
      creamer: currentCreamer.value,
      syrup: currentSyrup.value,
      temperature: currentTemp.value,
    };

    addRecipe(newRecipe);

    // Reset fields after creating the beverage
    beverageName.value = "";
    currentBase.value = "Coffee";
    currentCreamer.value = "No Creamer";
    currentSyrup.value = "No Syrup";
  };

  const showBeverage = (id: string) => {
    selectedBeverage.value = userRecipes.value.find((recipe) => recipe.id === id) || null;
    if (selectedBeverage.value) {
      currentTemp.value = selectedBeverage.value.temperature;
      currentBase.value = selectedBeverage.value.base;
      currentCreamer.value = selectedBeverage.value.creamer;
      currentSyrup.value = selectedBeverage.value.syrup;
    }
  };

  return {
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
    selectedBeverage,
    addRecipe,
    makeBeverage,
    showBeverage,
  };
});
