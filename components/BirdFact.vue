<template>
  <div class="row factBox">
    <div class="col small text-white text-center">
      <h2 class="fw-bold">BIRD FACT:</h2>
      <hr />
      <div>{{ facts[Math.floor(Math.random() * facts.length)] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      facts: [
        "Birds don't have teeth.",
        " Ostriches have the largest eyes in any mammal on land.",
        "The smallest known bird is a Bee Hummingbird.",
        "There are 10,000 species of birds.",
        "Flamingos can only eat when their heads are upside down",
        "A chicken with red earlobes will produce brown eggs, and a chicken with white earlobes will produce white eggs.",
        "The Hooded Pitohui of Papua, New Guinea is the world's only known poisonous bird. The poison is found in its skin and feathers.",
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-size: 12px;
}

.factBox {
  margin: 20px 20px 10px 20px;
  padding: 20px;
  background: #5a484d;
  border-radius: 4px;
  border: 0.1em solid #b195a1;

  animation: fadeInUp 0.5s ease-in-out;
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