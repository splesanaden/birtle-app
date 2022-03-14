<template>
  <section class="wg-keyboard">
    <div class="wg-keyboard__keys">
      <div
        class="keyboard-key"
        v-for="letter in alphObj"
        :key="letter.letter"
        :wg-letter="letter.letter"
        @click="$store.commit('letterPress', letter)"
        :guessed="letter.guessed"
        :in-word="letter.guessed && letter.inWord"
        :correct="letter.guessed && letter.correct"
      >
        {{ letter.letter == " " ? "SPACE" : letter.letter }}
      </div>
    </div>
    <div class="wg-keyboard__controls">
      <div
        wg-letter="check"
        :class="{
          'keyboard-key': true,
          'check-me':
            activeCell.cell == 4 &&
            board[activeCell.row].cells[activeCell.cell].guess,
        }"
        @click="$store.commit('checkRow')"
        :disabled="!board[activeCell.row].cells[4].guess"
      >
        CHECK
      </div>
      <div
        wg-letter="space"
        class="keyboard-key"
        @click="$store.commit('letterPress', 'space')"
        :disabled="
          disableKeyboard || activeCell.cell == 3 || activeCell.cell == 4
        "
      >
        SPACE
      </div>
      <div
        wg-letter="delete"
        class="keyboard-key"
        @click="$store.commit('deleteLetter')"
        :disabled="activeCell.cell == 0"
      >
        DELETE
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      disabled: [],
      alphabet: this.$store.state.alphabet,
      alphObj: this.$store.state.alphObj,
      word: this.$store.state.word,
      disableKeyboard: this.$store.state.disableKeyboard,
      activeCell: this.$store.state.activeCell,
      board: this.$store.state.board,
    };
  },
  props: {},

  computed: {
    scored() {
      //   console.log(this.board[this.activeCell.row], this.activeCell);
      if (
        this.activeCell.row - 1 == 0 &&
        this.board[this.activeCell.row].scored
      ) {
        return true;
      } else if (
        this.activeCell.row == this.board.length &&
        this.board[this.activeCell.row - 1].scored
      ) {
        return true;
      } else if (this.board[this.activeCell.row].scored) {
        return true;
      }
    },
  },

  methods: {
    isDisabled(letter) {
      if (this.board) {
        for (var row in this.board) {
          for (var i in this.board[row].cells) {
            if (letter == this.board[row].cells[i].guess) {
              return true;
            } else {
              return false;
            }
          }
        }
      } else {
        console.log("no board");
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.wg-keyboard {
  padding: 10px 20px 00px;
  //   margin-top: min(40px, 2vh);
  width: 100%;
  max-width: min(480px, 45vh);

  &__keys {
    min-height: min(var(--keyboard-height), 20vh);
    display: grid;
    gap: min(0.8em, 5px);
    grid-template-columns: repeat(30, 1fr);
    margin: auto;
    width: 100%;

    & .keyboard-key {
    }
  }
  &__controls {
    display: grid;
    gap: min(0.8em, 5px);
    grid-template-columns: repeat(30, 1fr);
    margin: 5px auto;
    width: 100%;
  }
  &__enter-key {
    font-size: min(3.6em, calc(var(--keyboard-height) / 7));
    grid-column: 25 / span 8 !important;
  }
  &__backspace-key {
    grid-area: 2 / 30 / 2 / 33 !important;
  }
}

.keyboard-key {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #6e5c62;
  font-size: min(4em, calc(var(--keyboard-height) / 12));
  border-radius: 4px;
  appearance: button;
  grid-column: span 3;
  transition: all 0.2s ease;
  min-height: (6vh);

  &:hover {
    background-color: #8f7d82;
    color: white;
  }
  &:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
      inset 2px 2px 3px rgba(0, 0, 0, 0.6);
  }
  &[guessed] {
    background-color: #8f7d82;
    // color: #6e5c62;
    // cursor: not-allowed;
    // pointer-events: none;
  }
  &[disabled] {
    background-color: #8f7d82;
    color: white;
    pointer-events: none;
    // cursor: not-allowed;
  }
  &[in-word] {
    background-color: #e09b07;
    // color: #6e5c62;
    // pointer-events: none;
  }
  &[correct] {
    background-color: rgb(0, 82, 18);
    // color: #6e5c62;
    // pointer-events: none;
  }

  &[wg-letter="a"] {
    grid-column: 2 / span 3;
  }
  &[wg-letter="z"] {
    grid-column: 5 / span 3;
  }
  &[wg-letter="check"] {
    grid-column: 1 / span 7;
    &.check-me {
      background-color: rgb(0, 82, 18);
      color: #ffffff;
    }
    &[disabled] {
      pointer-events: none;
      cursor: not-allowed;
    }
  }
  &[wg-letter="space"] {
    grid-column: 8 / span 16;
  }
  &[wg-letter="delete"] {
    grid-column: 24 / span 7;
  }
}
</style>