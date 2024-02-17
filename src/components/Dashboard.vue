<script setup>
import { useAuthStore } from '@/stores/AuthStore';
import { db } from '@/firebase/firebase';
import {getDocs, query, collection, where} from "firebase/firestore";
import {onMounted, ref} from "vue";
import PokemonForm from "@/components/PokemonForm.vue";

const authStore = useAuthStore();
const pokemonList = ref([]);

const fetchPokemons = async () => {
    const q = query(collection(db, "pokemon"), where("user", "==", authStore.user.uid));
    const querySnapshot = await getDocs(q);
    pokemonList.value = [];
    querySnapshot.forEach((doc) => {
        pokemonList.value.push(doc.data());
    });
};

onMounted(() => {
  fetchPokemons();
});
</script>

<template>
  <button @click="fetchPokemons">Refresh</button>
  <table class="table  table-striped">
     <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Dex</th>
        <th scope="col">Species</th>
        <th scope="col">Type</th>
        <th scope="col">Nickname</th>
        <th scope="col"><pokemon-form/></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pokemon, index) in pokemonList">
        <td><img :src="`../pokemon/${pokemon.img}.png`" alt="pokemon profile icon"/></td>
        <th scope="row">{{pokemon.dex}}</th>
        <td>{{pokemon.species}}</td>
        <td>{{pokemon.type}}</td>
        <td>{{pokemon.nickname}}</td>
        <td><button type="button" class="btn-close" aria-label="Close"></button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
img{
  width: 40px;
  border: grey 1px solid;
}
</style>
