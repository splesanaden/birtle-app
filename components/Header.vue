<template>
  <header class="row w-100 text-white" v-if="!loading">
    <div class="col-3 d-flex align-items-center justify-content-center">
      <i
        class="fa-solid fa-crow fa-fw fa-2x wg-link chirp"
        v-if="$route.name !== 'Stats'"
        title="Information"
        @click="$store.commit('toggleHelp', 'intro')"
      ></i>
    </div>
    <div class="col-6">
      <h1
        class="my-3 text-light text-center"
        style="letter-spacing: 3px"
        @click="$router.push('/')"
      >
        BIRTLE <span style="font-size: 12px; font-weight: 300"> v0.1</span>
      </h1>
    </div>
    <div class="col-3 d-flex align-items-center justify-content-center">
      <i
        class="fa fa-lightbulb fa-2x me-lg-5 me-auto wg-link"
        v-if="$route.name !== 'Stats'"
        title="Get a hint..."
        @click="$store.commit('toggleHelp', 'hint')"
      ></i>

      <i
        class="fa fa-bar-chart fa-2x wg-link"
        v-if="$route.name !== 'Stats'"
        title="Leaderbird"
        @click="$store.commit('toggleHelp', 'stats')"
      ></i>
    </div>
  </header>
</template>

<script>
export default {
  props: ["loading"],
};
</script>

<style>
</style>