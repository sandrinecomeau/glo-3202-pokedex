<script setup>
import {Modal} from "bootstrap";
import {onMounted, ref} from "vue";
import {  httpsCallable } from "firebase/functions";
import { useAuthStore } from '@/stores/AuthStore';
import {functions} from "@/firebase/firebase.js";
import {pokemonData} from "@/assets/pokemonData.js";
import PokemonDropdown from "@/components/PokemonDropdown.vue";
import Add from "@/components/Add.vue";

const authStore = useAuthStore();

const pokemonDropdownRef = ref('');
const modalRef = ref(Modal);

const addPokemonFunction = httpsCallable(functions, 'addPokemon');


function verifyForm() {
  if (document.getElementById('nickname').value === '' || pokemonDropdownRef.value.getSelectedPokemon() === '') {
    alert('Please fill in all fields.');
    return false;
  }
  if (document.getElementById('nickname').value.length > 25 || pokemonDropdownRef.value.getSelectedPokemon().length > 25){
    alert('Max length of nickname and species is 25 characters.');
    return false;
  }
  if (!document.getElementById('nickname').value.match(/^[a-zA-Z0-9\s]*$/) || !pokemonDropdownRef.value.getSelectedPokemon().match(/^[a-zA-Z0-9\s]*$/)) {
    alert('Nickname and species can only contain letters and numbers.');
    return false;
  }

  let species = pokemonDropdownRef.value.getSelectedPokemon();
  species = species.toLowerCase().replace(/\s/g, '');
  species = species.charAt(0).toUpperCase() + species.slice(1);

  if (!pokemonData.includes(species)) {
    alert('Invalid species name');
    return false;
  }

  return true;
}

function addPokemon() {
  if (!verifyForm()) {
    return;
  }

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

