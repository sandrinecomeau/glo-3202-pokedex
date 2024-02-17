<script setup>
import { useAuthStore } from '../stores/AuthStore';
const authStore = useAuthStore();


const pokemonList = [
  {
    "dex_number": "001",
    "img":"1",
    "specie": "Bulbasaur",
    "type": "Plant"
  },
  {
    "dex_number": "004",
    "img":"4",
    "specie": "Charmander",
    "type": "Fire"
  },
    {
    "dex_number": "025",
    "img":"25",
    "specie": "Pikachu",
    "type": "Electric"
  },
  {
    "dex_number": "151",
    "img":"151",
    "specie": "Mew",
    "type": "Psy"
  }
]

</script>

<template>
  <table class="table  table-striped">
     <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Dex</th>
        <th scope="col">Species</th>
        <th scope="col">Type</th>
        <th scope="col">+ ADD</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pokemon, index) in pokemonList">
        <td><img :src="`../pokemon/${pokemon.img}.png`" alt="pokemon profile icon"/></td>
        <th scope="row">{{pokemon.dex_number}}</th>
        <td>{{pokemon.specie}}</td>
        <td>{{pokemon.type}}</td>
        <td><button>x</button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
img{
  width: 40px;
}
</style>
