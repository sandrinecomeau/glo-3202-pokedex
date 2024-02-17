<script setup>

const addPokemon = () => {
  console.log("addPokemon");
}

</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    ADD ++
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add a Pokémon</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="species" class="form-label">Species</label>
              <input type="text" class="form-control" id="species">
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
