<template>
  <div class="header" @mousemove="parallax" @mouseleave="reset" id="home">
    <!-- socials -->
    <div class="header__social">
      <div class="header__social__link" v-for="(social, i) in socials" :key="i">
        <a :href="social.link" target="_blank">
          <v-icon class="header__social__link__icon">{{
            social.icon
          }}</v-icon></a
        >
      </div>
      <div class="header__social__line"></div>
    </div>
    <!-- right scroll -->
    <div class="header__scroll">
      <span>{{ $t("scroll") }}</span>
      <div class="header__scroll__line"></div>
    </div>

    <!-- center img -->
    <div class="header__center text-center">
      <div class="header__center__img bg"></div>
      <span class="header__center__text toggle-text-color "
        >{{ $t("me1") }} <br />
        {{ $t("me2") }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        icon: "mdi-facebook",
        title: "Facebook",
        link: "https://www.facebook.com/dantyyyy/",
      },
      {
        icon: "mdi-linkedin",
        title: "Linkedin",
        link: "https://www.linkedin.com/in/noureddin-eibo-6123241a4/",
      },
      {
        icon: "mdi-instagram",
        title: "Instagram",
        link: "https://www.instagram.com/noureddin_97/?hl=en",
      },
    ],
  }),
  methods: {
    parallax(e) {
      let bg = document.querySelector(".bg");
      const x = (window.innerWidth - e.pageX * 3) / 350;
      const y = (window.innerHeight - e.pageY * 3) / 350;
      bg.style.transform = `translateX(${-50 + x}%) translateY(${-50 +
        y}%) scale(1.04)`;
    },
    reset() {
      let bg = document.querySelector(".bg");
      bg.style.transform = `translateX(-50%) translateY(-50%) scale(1)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 100vh;
  .bg {
    transition: 0.3s;
  }

  &__social {
    position: absolute;
    bottom: 60px;
    left: 40px;

    &__link {
      margin-bottom: 10px;

      &__icon {
        color: #767676;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          color: var(--light-text);
        }
      }
    }
    &__line {
      width: 1px;
      height: 40px;
      background: #767676;
      position: relative;
      margin: auto;
    }
  }
  &__scroll {
    position: absolute;
    bottom: 60px;
    right: 30px;

    span {
      color: #767676;
      writing-mode: vertical-rl;
      transition: 0.2s;
      cursor: pointer;
      margin-bottom: 10px;
      &:hover {
        color: var(--light-text);
      }
    }
    &__line {
      width: 1px;
      height: 60px;
      background: #767676;
      position: relative;
      margin: auto;
    }
  }

  &__center {
    &__img {
      mask-image: url("../assets/images/splash.png");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      height: 600px;
      width: 65vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%);

      &:before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 97%;
        height: 97%;
        background: #6589ac;
      }
    }

    &__text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;
      font-weight: 700;
    }
  }
  @media (max-width: 960px) {
    &__center {
      &__img {
        width: 80vw;
        &:before {
          width: 97%;
        }
      }
    }
  }
}
.v-application--is-rtl .header__scroll {
  left: 30px !important;
  right: unset;
}
.v-application--is-rtl .header__social {
  right: 40px !important;
  left: unset;
}
</style>
