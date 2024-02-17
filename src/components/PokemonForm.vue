<script setup>
import {Modal} from "bootstrap";
import {onMounted, ref} from "vue";
import {db} from "@/firebase/firebase.js";
import {addDoc, collection} from "firebase/firestore";
import { useAuthStore } from '@/stores/AuthStore';
import PokemonDropdown from "@/components/PokemonDropdown.vue";

const authStore = useAuthStore();
const pokemonDropdownRef = ref('');
const modalRef = ref(Modal);

onMounted(() => {
      setTimeout(() => {
        modalRef.value = new Modal(document.getElementById('formModal'));
      }, 200);
});

const addPokemon = async () => {
  const pokemon = {
    species: pokemonDropdownRef.value.getSelectedPokemon(),
    nickname: document.getElementById('nickname').value,
    user: authStore.user.uid
  };

  try {
    await addDoc(collection(db, 'pokemon'), pokemon);
    modalRef.value.hide();
  } catch (error) {
    window.alert("This Pokémon could not be added. Please try again.");
  }
}

</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#formModal">
    ADD ++
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
