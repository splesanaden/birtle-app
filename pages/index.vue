<template>
  <div class="wg-body justify-content-start justify-content-md-center">
    <div
      id="loader"
      class="
        min-vh-100
        d-flex
        flex-column
        justify-content-center
        align-items-center
        text-light
      "
      v-if="loading"
    >
      <i class="fa-solid fa-crow fa-fw fa-3x"></i>
      <h3 class="mt-3">Get ready!</h3>
    </div>

    <header class="row w-100 text-white" v-if="!loading">
      <div class="col-3 d-flex align-items-center justify-content-center">
        <i
          class="fa-solid fa-crow fa-fw fa-2x wg-link"
          @click="$store.commit('toggleHelp')"
        ></i>
      </div>
      <div class="col-6">
        <h1 class="my-3 text-light text-center" style="letter-spacing: 3px">
          BIRTLE <span style="font-size: 12px; font-weight: 300"> v0.1</span>
        </h1>
      </div>
      <div class="col-3 d-flex align-items-center justify-content-center">
        <a href="stats" class="wg-link">
          <i class="fa fa-bar-chart text-white fa-2x"></i>
        </a>
      </div>
    </header>
    <main class="wg-board" v-if="!$store.state.solved && !loading">
      <div
        class="wg-row"
        v-for="row in board"
        :key="row.row"
        :data-row="row.row"
      >
        <div
          :class="[
            cellScore(cell, row),

            {
              'wg-cell': true,
              active: isActive(row.row, cell.id),
              bob: cell.guess,
              guessed: cell.guess,
            },
          ]"
          v-for="cell in row.cells"
          :key="cell.id"
          :data-value="cell.value"
        >
          {{ cell.guess }}
        </div>
      </div>
    </main>
    <Keyboard
      v-if="!$store.state.solved && !loading"
      @letter-press="$store.commit('letterPress', $event)"
      @delete-letter="$store.commit('deleteLetter', $event)"
      @check-row="$store.commit('checkRow', $event)"
      :disableKeyboard="disableKeyboard"
    />

    <Congrats v-show="$store.state.solved" class="my-5" />

    <Congrats v-show="$store.state.fail" />

    <section class="container mt-2 mb-auto">
      <div class="row" id="timeRow" v-show="!$store.state.solved">
        <div class="col-3"></div>
        <div class="col-6 text-light text-center">
          <h3>{{ $timeFormat(this.$store.state.time) }}</h3>
        </div>
        <div class="col-3"></div>
      </div>
    </section>
    <section class="wg-modal" v-if="$store.state.viewHelp">
      <div class="container">
        <div class="row w-100 text-end mt-2">
          <i
            class="fa-solid fa-close text-light fa-2x wg-link"
            @click="$store.commit('toggleHelp')"
          ></i>
        </div>
        <Intro />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      loading: true,
      alphabet: this.$store.state.alphabet,
      word: this.$store.state.word,
      stopTime: null,
      disableKeyboard: this.$store.state.disableKeyboard,
      activeCell: this.$store.state.activeCell,
      board: this.$store.state.board,
    };
  },
  computed: {},

  methods: {
    cellScore(cell, row) {
      if (row.scored && cell.guess == cell.value) {
        return "correct";
      } else {
        if (
          row.scored &&
          this.word.includes(cell.guess) &&
          cell.guess !== cell.value
        ) {
          //word contains letter but not in correct position

          //if letter is already found in other position
          // if letter ==
          for (let i = 0; i < row.cells.length; i++) {
            console.log(row.cells[i].guess + " vs " + cell.guess);
            if (row.cells[i].guess == cell.guess && i !== cell.id) {
              return "already";
            }
          }
          return "in-word";
        }
      }
    },
    isActive(row, cell) {
      if (this.activeCell.row == row && this.activeCell.cell == cell) {
        // console.log(this.activeCell.row, this.activeCell.cell);
        return true;
      } else {
        return false;
      }
    },

    stopWatch() {
      this.stopTime;
      if (this.$store.state.time == 0) {
        this.stopTime = setInterval(() => {
          this.$store.commit("increaseTime");
        }, 1000);
      } else {
        clearInterval(this.stopTime);
      }
    },
  },
  destroyed() {
    clearInterval(this.stopTime);
  },
  created() {
    this.$nuxt.$on("startWatch", () => {
      setTimeout(() => {
        this.loading = false;
        this.stopWatch();
      }, 1000);
    });
  },
  mounted() {
    this.$store.commit("initBoard");
  },
};
</script>
