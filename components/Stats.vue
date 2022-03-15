<template>
  <div
    class="
      container
      justify-content-start justify-content-md-center
      text-center
    "
  >
    <div class="row">
      <div class="col text-white text-center">
        <i class="fa-solid fa-crow fa-fw fa-3x mb-3 birdIcon mx-auto"></i>
      </div>
    </div>
    <div class="row">
      <div class="col text-white text-center">
        <div class="fw-bold">Leaderbirds</div>
        <hr />
      </div>
    </div>
    <div class="row text-white h6 mt-3 text-center">
      <div class="col-3">Rank</div>
      <div class="col-6">Attempts</div>
      <div class="col-3">Time</div>
    </div>
    <div
      class="row text-light text-center"
      v-for="score in leaderboard"
      :key="leaderboard.indexOf(score)"
    >
      <div class="col-3"># {{ leaderboard.indexOf(score) + 1 }}</div>
      <div class="col-6">{{ score.attempts }}</div>
      <div class="col-3">{{ $timeFormat(score.time) }}</div>
    </div>
    <div class="row mt-3" v-if="$store.state.viewStats">
      <div class="col-12 mt-4">
        <button
          class="btn wg-btn"
          @click="$store.commit('toggleHelp', 'stats')"
        >
          Back to Game
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaderboard: [
        { attempts: 1, time: 14 },
        { attempts: 2, time: 25 },
        { attempts: 3, time: 28 },
        { attempts: 3, time: 35 },
        { attempts: 3, time: 36 },
        { attempts: 4, time: 42 },
        { attempts: 4, time: 47 },
        { attempts: 5, time: 56 },
      ],
    };
  },
};
</script>

<style scoped>
.birdIcon {
  border-radius: 20px;
  background: #b195a1;
  aspect-ratio: 1;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>