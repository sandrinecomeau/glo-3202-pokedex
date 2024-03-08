<script setup>
import { useAuthStore } from '@/stores/AuthStore';
import { db } from '@/firebase/firebase';
import {getDocs, query, collection, where, orderBy, doc,  deleteDoc} from "firebase/firestore";
import {onMounted, ref} from "vue";
import PokemonForm from "@/components/PokemonForm.vue";
import Refresh from "@/components/Refresh.vue";

const authStore = useAuthStore();
const pokemonList = ref([]);

const fetchPokemons = async () => {
    const q = query(collection(db, "pokemon"),
        where("user", "==", authStore.user.uid),
        orderBy("dex", "asc"));
    const querySnapshot = await getDocs(q);
    pokemonList.value = [];
     pokemonList.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

const deletePokemon = async (pokemonId) => {
    await deleteDoc(doc(db, "pokemon", pokemonId));
    await fetchPokemons();
};

onMounted(() => {
  fetchPokemons();
});
</script>

<template>
  <table class="table  table-striped">
     <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Dex</th>
        <th scope="col">Species</th>
        <th scope="col">Type</th>
        <th scope="col">Nickname</th>
        <th scope="col" style="width: 120px">
          <pokemon-form/>
          <button @click="fetchPokemons" class="btn btn-primary"><refresh/></button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pokemon, index) in pokemonList">
        <td><img :src="`../pokemon/${pokemon.img}.png`" alt="pokemon profile icon"/></td>
        <th scope="row">{{pokemon.dex}}</th>
        <td>{{pokemon.species}}</td>
        <td>
          <span v-for="type in pokemon.type" :key="type" :class="`type-name ${type}`">{{ type }}</span>
        </td>
        <td>{{pokemon.nickname}}</td>
        <td><button type="button" class="btn-close" aria-label="Close"  @click="deletePokemon(pokemon.id)"></button></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
button{
  margin: 10px;
}
img{
  width: 40px;
  border: grey 1px solid;
}

.type-name{
  margin-right: 5px;
  padding: 0 12px;
  border-radius: 15px;
  color: white;
  border: white 1px solid;
  box-shadow: 0 3px 3px -1px rgba(0,0,0,0.1);
  text-shadow: 0 1px 1px rgba(0,0,0,0.5);
}
</style>
