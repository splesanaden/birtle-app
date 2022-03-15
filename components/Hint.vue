<template>
  <div class="hintBox">
    <div class="col small text-white text-center">
      <h2 class="fw-bold">HINT:</h2>
      <hr />
      <div>{{ hint }}</div>
      <button
        class="btn wg-btn mt-3"
        @click="$store.commit('toggleHelp', 'hint')"
      >
        Okeydoke
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hint"],
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  font-size: 12px;
}

.hintBox {
  margin: 20px 20px 10px 20px;
  padding: 20px;
  background: #5a484d;
  border-radius: 4px;
  border: 0.1em solid #b195a1;
  animation-delay: 6s;
  animation: fadeInUp 0.5s ease-in-out;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>