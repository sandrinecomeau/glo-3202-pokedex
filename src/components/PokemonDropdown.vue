<script setup>
import { ref, computed } from 'vue';
import { pokemonData } from "../assets/pokemonData.js";

const species = ref('');
const pokemonChosen = ref('');
const pokemonDropdownRef = ref('');

const filteredPokemon = computed(() => {
  pokemonDropdownRef.value = species.value;
  if (!species.value) return [];
  return pokemonData.filter(pokemon => pokemon.toLowerCase().includes(species.value.toLowerCase()));
});

const shouldShowDropdown = computed(() => {
  return species.value.length > 0 && pokemonChosen.value !== species.value;
});

const getSelectedPokemon = () => {
  return pokemonDropdownRef.value;
}

defineExpose({
  getSelectedPokemon
});

const setPokemon = (pokemon) => {
  species.value = pokemon;
  pokemonChosen.value = pokemon;
}
</script>

<template>
  <label for="species" class="form-label">Species</label>
  <input class="form-control" id="species" v-model="species" placeholder="Type to search...">
  <div id="dropdown" :class="{ 'hidden': !shouldShowDropdown }">
    <p v-for="pokemon in filteredPokemon" :key="pokemon" @click="setPokemon(pokemon)" class="dropdown-item">
      {{ pokemon }}
    </p>
    <p v-if="filteredPokemon.length === 0">No results found</p>
  </div>
</template>


<style scoped>
#dropdown{
  height: fit-content;
  max-height: 25vh;
  overflow-y: scroll;
  border: #dadada 1px solid;
}

#dropdown p{
  padding: 1px 0 0 5px;
  margin-bottom: 0;
}

#dropdown p:hover{
  background-color: #f2f2f2;
  cursor: pointer;
}

.hidden{
  display: none;
}
</style>
