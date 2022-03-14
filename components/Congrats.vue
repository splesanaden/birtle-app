<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center text-white">
          <h1>Great Work!</h1>
          <h4>You've solved today's puzzle.</h4>
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
      <div class="row mb-4">
        <div class="col-12 text-center text-white">
          It took you: {{ $timeFormat(this.$store.state.solveTime) }}
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center text-white">
          <button
            class="btn wg-btn"
            v-show="!hideCopyButton"
            @click="copyClipboard"
          >
            Share
          </button>
          <div v-show="hideCopyButton">Copied to clipboard!</div>
          <!-- <textarea id="copyarea" rows="4" :value="clipboardScore()"></textarea> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hideCopyButton: false,
    };
  },
  methods: {
    copyClipboard() {
      this.copyTextToClipboard(this.clipboardScore());
      this.hideCopyButton = true;
    },

    clipboardScore() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;
      var scores =
        "I got today's Birtle on " +
        today +
        ":\n in " +
        this.$timeFormat(this.$store.state.solveTime) +
        " seconds.\n";
      for (var r in this.$store.state.board) {
        var row = this.$store.state.board[r];
        for (var c in row.cells) {
          var cell = row.cells[c];
          if (cell.guess && cell.guess == cell.value) {
            scores += "🟩";
          } else {
            if (!row.scored) return scores;
            if (
              cell.guess &&
              row.scored &&
              this.$store.state.word.includes(cell.guess) &&
              cell.guess !== cell.value
            ) {
              //word contains letter but not in correct position
              if (
                cell.guess &&
                row.cells[i].guess == cell.guess &&
                i !== cell.id
              ) {
                scores += "🟨";
              }
            } else {
              scores += "⬜";
            }
          }
        }
        if (r !== this.$store.state.board.length - 1) {
          scores += "\n";
        }
      }
      console.log("scores", scores);
      return scores;
    },
    fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }

      document.body.removeChild(textArea);
    },
    copyTextToClipboard(text) {
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    },
  },
};
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

#copyarea {
  display: none;
}
</style>