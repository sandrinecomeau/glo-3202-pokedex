<script setup>
import {Modal} from "bootstrap";
import {onMounted, ref} from "vue";
import {  httpsCallable } from "firebase/functions";
import { useAuthStore } from '@/stores/AuthStore';
import {functions} from "@/firebase/firebase.js";
import PokemonDropdown from "@/components/PokemonDropdown.vue";
import Add from "@/components/Add.vue";

const authStore = useAuthStore();

const pokemonDropdownRef = ref('');
const modalRef = ref(Modal);

const addPokemonFunction = httpsCallable(functions, 'addPokemon');

function addPokemon() {
  const pokemonData = {
    species: pokemonDropdownRef.value.getSelectedPokemon(),
    nickname: document.getElementById('nickname').value
  };

  addPokemonFunction(pokemonData).then((result) => {
    console.log(result.data.message);
    modalRef.value.hide();
  }).catch((error) => {
    console.error(`Error adding Pokemon: ${error.message}`);
  });
}


onMounted(() => {
      setTimeout(() => {
        modalRef.value = new Modal(document.getElementById('formModal'));
      }, 200);
});
</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#formModal">
    <add/>
  </button>

  <!-- Modal -->
  <div class="modal fade" id="formModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Pokémon</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <PokemonDropdown ref="pokemonDropdownRef"/>
            </div>
            <div class="mb-3">
              <label for="nickname" class="form-label">Nickname</label>
              <input type="text" class="form-control" id="nickname">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" @click="addPokemon">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
