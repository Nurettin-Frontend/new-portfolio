<template>
  <div class="skills max-container" id="skills">
    <v-row>
      <v-col class="skills__tabs" cols="12" md="6">
        <LeftTitle title="skills" />
        <div>
          <div class="skills__tabs__title">
            <span class="toggle-text-color"
              >{{ $t("skillTitle1") }}<br />
              {{ $t("skillTitle2") }}</span
            >
            <p class="toggle-text-color">
              {{ $t("skillDesc") }}
            </p>
          </div>
          <div class="skills__tabs__tab toggle-sub-bg">
            <div
              class="skills__tabs__tab__active"
              :class="
                activeTab == 2 ? 'skills__tabs__tab__active--activate' : ''
              "
            ></div>
            <span class="toggle-text-color" @click="activeTab = 1">{{
              $t("tabSkill")
            }}</span>
            <span class="toggle-text-color" @click="activeTab = 2">{{
              $t("tabTool")
            }}</span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" v-if="activeTab === 1" :key="activeTab">
        <div
          class="skills__skill toggle-sub-bg"
          v-for="(skill, i) in skills"
          :key="i"
          :style="{ animationDelay: i + '00ms' }"
        >
          <v-tooltip top color="secondary">
            <template v-slot:activator="{ on, attrs }">
              <img v-bind="attrs" v-on="on" :src="skill.img" alt="" />
            </template>
            <span>{{ skill.title }}</span>
          </v-tooltip>
        </div>
      </v-col>
      <v-col cols="12" md="6" v-if="activeTab === 2" :key="activeTab">
        <div
          class="skills__skill"
          v-for="(tool, i) in tools"
          :key="i"
          :style="{ animationDelay: i + '00ms' }"
        >
          <v-tooltip top color="secondary">
            <template v-slot:activator="{ on, attrs }">
              <img v-bind="attrs" v-on="on" :src="tool.img" alt="" />
            </template>
            <span>{{ tool.title }}</span>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LeftTitle from "./LeftTitle.vue";
export default {
  components: {
    LeftTitle,
  },
  data: () => ({
    activeTab: 1,
    skills: [
      {
        title: "HTML5",
        img: require("@/assets/images/html5.png"),
      },
      {
        title: "CSS3",
        img: require("@/assets/images/css3.png"),
      },
      {
        title: "JavaScript",
        img: require("@/assets/images/javascript.png"),
      },
      {
        title: "React",
        img: require("@/assets/images/react.png"),
      },
      {
        title: "Vue",
        img: require("@/assets/images/vue.png"),
      },
      {
        title: "API",
        img: require("@/assets/images/api.png"),
      },
      {
        title: "Firebase",
        img: require("@/assets/images/firebase.png"),
      },
      {
        title: "Bootstrap",
        img: require("@/assets/images/bootstrap.png"),
      },
      {
        title: "Pugjs",
        img: require("@/assets/images/pugjs.png"),
      },
      {
        title: "Sass",
        img: require("@/assets/images/sass.png"),
      },
    ],
    tools: [
      {
        title: "XD",
        img: require("@/assets/images/adobe-xd.png"),
      },
      {
        title: "Figma",
        img: require("@/assets/images/figma.png"),
      },
      {
        title: "Ajax",
        img: require("@/assets/images/ajax.png"),
      },
      {
        title: "NPM",
        img: require("@/assets/images/npm.png"),
      },
      {
        title: "Slack",
        img: require("@/assets/images/slack.png"),
      },
      {
        title: "VS-Code",
        img: require("@/assets/images/vs-code.png"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.skills {
  padding: 100px 20px;

  &__tabs {
    display: flex;

    &__title {
      margin-inline-start: 20px;
      span {
        font-weight: 800;
        font-size: 34px;
        line-height: 44px;
      }
      p {
        font-weight: 300;
        opacity: 0.8;
        margin-top: 20px;
      }
    }

    &__tab {
      border-radius: 20px;
      padding: 3px;
      display: inline-flex;
      margin-left: 20px;
      position: relative;
      overflow: hidden;
      box-shadow: 11px 10px 38px rgb(0 0 0 / 38%);

      span {
        padding: 5px 20px;
        transition: 0.3s;
        cursor: pointer;
        position: relative;
        z-index: 1;
      }

      &__active {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
        width: 75px;
        height: 30px;
        background: $secondary;
        border-radius: 20px;
        transition: 0.3s;
        &--activate {
          transform: translate(115%, -50%);
        }
      }
    }
  }

  &__skill {
    box-shadow: 11px 10px 38px rgb(0 0 0 / 38%);
    display: inline-block;
    border-radius: 10px;
    width: 80px;
    height: 80px;
    position: relative;
    margin: 0px 20px 10px 0px;
    transform: translate(20px, 20px);
    animation: animate 0.2s ease-in-out forwards;
    opacity: 0;
    cursor: pointer;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
    }
  }
  @media (max-width: 960px) {
    padding: 40px 20px;
    &__tabs{
      display: block;

      &__title{
        margin: 0px;
        margin-top: 10px;
      }
      &__tab{
        margin: 0px;
      }
    }
  }
}

@keyframes animate {
  0% {
    transform: translate(20px, 20px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
</style>
