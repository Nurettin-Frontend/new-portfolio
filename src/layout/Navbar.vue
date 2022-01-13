<template>
  <div>
    <v-app-bar fixed hide-on-scroll class="toggle-sub-bg" elevation="1">
      <div class="navbar navbar__contain max-container w-100">
        <div class="navbar__contain__logo">
          <span class="font-32 toggle-text-color">{{ $t("nour") }}</span>
        </div>
        <ul v-if="!$vuetify.breakpoint.mobile" class="navbar__contain__links">
          <li
            class="toggle-text-color"
            v-for="(link, i) in links"
            :key="i"
            @mouseover="hoverTag"
            @click="$vuetify.goTo('#'+link)"
          >
            {{ $t(link) }}
          </li>
        </ul>
        <div class="d-flex align-center ">
          <span class="toggle-text-color cursor-pointer" @click="langToggle">{{
            isEN
          }}</span>

          <div
            class="navbar__contain__mode toggle-main-bg ml-inline-4 cursor-pointer"
            @click="toggleMode"
          >
            <div :class="lightMode ? 'light-active' : ''"></div>
          </div>
          <div v-if="$vuetify.breakpoint.mobile">
            <v-icon @click="drawer = !drawer" class="toggle-text-color"
              >mdi-menu</v-icon
            >
          </div>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      fixed
      left
      class="drawer toggle-sub-bg"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(link, i) in links" :key="i">
            <v-list-item-title class="toggle-text-color" @click="$vuetify.goTo('#' + link)">{{
              $t(link)
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ["home", "skills", "works", "contact"],
    lightMode: false,
    isEN: null,
    drawer: false,
  }),
  methods: {
    langToggle() {
      let customLang = this.isEN == "EN" ? "AR" : "EN";
      console.log(customLang);
      if (customLang == "AR") {
        localStorage.setItem("language", "EN");
        this.$vuetify.rtl = false;
        this.$i18n.locale = "EN";
      } else {
        localStorage.setItem("language", "AR");
        this.$i18n.locale = "AR";
        this.$vuetify.rtl = true;
      }
      this.isEN =
        localStorage.getItem("language") == "EN" || undefined ? "AR" : "EN";
    },
    hoverTag() {
      document.querySelectorAll("li").forEach((elem) => {
        elem.onmouseenter = elem.onmouseleave = (e) => {
          const tolerance = 10;

          const left = 0;
          const right = elem.clientWidth;

          let x = e.pageX - elem.offsetLeft;

          if (x - tolerance < left) x = left;
          if (x + tolerance > right) x = right;

          elem.style.setProperty("--x", `${x}px`);
        };
      });
    },
    toggleMode() {
      this.lightMode = !this.lightMode;
      let body = document.querySelector("body");
      if (this.lightMode) {
        body.style.setProperty("--light-text", "#2a2a2a");
        body.style.setProperty("--light-main-bg", "#ffffff");
        body.style.setProperty("--light-sub-bg", "#ffffff");
      } else {
        body.style.setProperty("--light-text", "#ffffff");
        body.style.setProperty("--light-main-bg", "#1f1f1f");
        body.style.setProperty("--light-sub-bg", "#2a2a2a");
      }
    },
  },
  created() {
    this.isEN =
      localStorage.getItem("language") == "EN" || !this.isEN ? "AR" : "EN";
  },
};
</script>

<style lang="scss" >
.navbar {
  padding: 10px 0px;

  &__contain {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__links {
      li {
        display: inline-block;
        margin: 0px 10px;
        padding: 5px 10px;
        cursor: pointer;
        position: relative;

        &::after {
          --scale: 0;

          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 100%;
          height: 3px;
          background: linear-gradient(135deg, #6589ac, rgb(9, 208, 243));
          transform: scaleX(var(--scale));
          transform-origin: var(--x) 50%;
          transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
        }
        &:hover::after {
          --scale: 1;
        }
      }
    }

    &__mode {
      width: 60px;
      height: 30px;
      border-radius: 20px;
      padding: 3px;
      position: relative;
      box-shadow: 0px 3px 10px rgb(0 0 0 / 18%);

      div {
        box-shadow: 5px -4px #fff inset;
        position: absolute;
        top: 5px;
        width: 20px;
        height: 20px;
        left: 5px;
        border-radius: 50%;
        transition: 0.3s;
      }
    }
  }
  .light-active {
    box-shadow: 22px -20px #f9d71c inset;
    left: 30px;
  }
}
  .v-navigation-drawer__content{
    z-index: 99999999999999 !important;
    position: relative;
  }
@media (max-width: 960px) {
  .v-app-bar {
    height: 65px !important;
  }
}
</style>
