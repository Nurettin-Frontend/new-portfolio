<template>
  <div class="footer toggle-sub-bg">
    <div class="max-container d-flex align-center justify-space-between">
      <span class="footer__logo toggle-text-color font-800 font-24"
        >{{ $t("nour") }} <span class="secondary-text font-32">.</span></span
      >
      <div class="footer__copy">
        <span class="toggle-text-color font-18">
          {{ $t("copyRight") }}

          <v-tooltip top color="secondary">
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on"  class="secondary-text cursor-pointer d-inline-block"
                >webrouk</span
              >
            </template>

            <span class="font-14">{{ $t("coded") }}</span>
          </v-tooltip>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px 20px;
}
</style>
