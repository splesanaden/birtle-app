<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center text-white">
          <h1>Too Bad.</h1>
          <h4>You didn't get it today.</h4>
        </div>
      </div>
    </div>
    <div
      class="
        container
        d-flex
        flex-column
        justify-content-center
        align-items-center
        mt-3
      "
    >
      <div
        class="row align-items-center justify-content-center mb-4"
        v-for="row in $store.state.board"
        :key="row.row"
        v-show="row.scored"
      >
        <div
          class="col-1 mx-2 text-center rounded resultCol"
          v-for="cell in row.cells"
          :key="cell.id"
          :state="$store.state.word.includes(cell.guess)"
        >
          {{
            cell.guess == cell.value
              ? "🟩"
              : $store.state.word.includes(cell.guess)
              ? "🟨"
              : "⬜"
          }}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center text-white">
          <h2>
            <a href="/" class="btn wg-btn"> Share </a>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.resultCol {
  aspect-ratio: 1;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
}
</style>