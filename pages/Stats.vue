<template>
  <div class="wg-body justify-content-start justify-content-md-center">
    <div class="row">
      <div class="col text-white text-center">
        <i class="fa-solid fa-crow fa-fw fa-3x mb-3 birdIcon"></i>
      </div>
    </div>
    <div class="row w-50">
      <div class="col text-white text-center">
        <div class="fw-bold">Leaderbirds</div>
        <hr />
      </div>
    </div>
    <div class="row w-100 text-white h6 mt-3 text-center">
      <div class="col-3">Rank</div>
      <div class="col-6">Attempts</div>
      <div class="col-3">Time</div>
    </div>
    <div
      class="row w-100 text-light text-center"
      v-for="score in leaderboard"
      :key="score"
    >
      <div class="col-3"># {{ leaderboard.indexOf(score) }}</div>
      <div class="col-6">{{ score.attempts }}</div>
      <div class="col-3">{{ $timeFormat(score.time) }}</div>
    </div>
    <div class="row text-white mt-5 text-center">
      <div class="col">
        <a href="#" class="btn wg-btn">Back</a>
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