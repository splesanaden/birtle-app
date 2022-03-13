<template>
  <div
    class="
      container
      min-vh-100
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <div class="row">
      <div class="col text-white text-center">
        <font-awesome-icon
          icon="fa-solid fa-crow"
          class="fa-fw fa-3x mb-3 p-4 birdIcon"
        />
      </div>
    </div>
    <div class="row">
      <div class="col text-white text-center">
        <div class="fw-bold">Welcome to Birtle</div>
        <div>
          <br />
          Birtle is a game about birds.
          <br />
          <br />
          Guess the word. Four tries.
          <br />
          <br />
          The word's about birds.
        </div>
        <button class="btn wg-btn my-4" @click="$store.commit('startGame')">
          Start
        </button>
      </div>
    </div>
    <BirdFact />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.birdIcon {
  border-radius: 20px;
  background: #b195a1;
}
</style>