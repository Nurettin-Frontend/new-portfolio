<template>
  <div class="title">
    <span class="toggle-text-color">{{ $t(title) }}</span>
    <div class="title__line"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: min-content;
  span {
    writing-mode: vertical-rl;
    color: #767676;
  }
  &__line {
    margin: auto;
    margin-top: 10px;
    position: relative;
    width: 1px;
    height: 50px;
    background: #767676;
  }

  @media (max-width: 960px) {
    width: max-content;
    span {
      display: block;
      writing-mode: unset;
    }
    &__line {
      margin: unset;
      margin-top: 0px;
      position: relative;
      width: 50px;
      height: 1px;
      background: #767676;
    }
  }
}
</style>
