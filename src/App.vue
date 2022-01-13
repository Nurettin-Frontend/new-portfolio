<template>
  <v-app id="app" class="toggle-main-bg">
    dsdasdsa
    <router-view />
    <!-- <cursor-fx :config="config"  :hide-inside="true"> </cursor-fx> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    config: {
      lerps: {
        dot: 4,
        circle: 0.5,
        custom: 0.8,
      },
      scale: {
        ratio: 0.18,
        min: 0.5,
        max: 1,
      },
      opacity: 0.1,
    },
  }),
};
</script>
