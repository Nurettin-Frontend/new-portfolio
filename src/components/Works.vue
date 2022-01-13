<template>
  <div class="works max-container" id="works">
    <v-row>
      <v-col md="4" cols="12">
        <div class="works__tabs">
          <LeftTitle title="workLeftTitle" />
          <div>
            <div class="works__tabs__title ">
              <span class="toggle-text-color"
                >{{ $t("workTitle1") }}<br />
                {{ $t("workTitle2") }}</span
              >
              <p class="toggle-text-color">
                {{ $t("workDesc") }}
              </p>
            </div>
            <!-- <div class="m-inline-5">
              <div class="works__tabs__tab " v-for="(tab, i) in tabs" :key="i">
                <span
                  :class="tab.active ? 'tab-active' : 'toggle-text-color'"
                  @click="tabClickHandler(tab)"
                  >{{ tab.title }} </span
                ><span>/</span>
              </div>
            </div> -->
          </div>
        </div>
      </v-col>

      <v-col md="4" cols="6" v-for="(project, i) in filteredProjects" :key="i">
        <transition name="list">
          <div class="works__cover cursor-pointer" @click="goToPage(project)">
            <div class="works__cover__layout"></div>
            <img :src="project.img" alt="" />
            <div class="works__cover__contain">
              <div class="works__cover__contain__top">
                <span>{{ project.title }}</span>
              </div>
            </div>
          </div>
        </transition>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LeftTitle from "./LeftTitle";
export default {
  components: {
    LeftTitle,
  },
  data: () => ({
    clientX: null,
    clientY: null,
    tabs: [
      { title: "VUE", active: true },
      { title: "HTML5", active: false },
      { title: "REACT", active: false },
    ],
    projects: [
      {
        title: "DISRUPT-X.IO",
        img: require("@/assets/images/projects/disrput.png"),
        date: "Date 1",
        link: "https://disrupt-x.io/new-portfolio/#/",
        lang: "VUE",
      },
      {
        title: "UNIFI SOLUTIONS",
        img: require("@/assets/images/projects/unifi.png"),

        date: "Date 2",
        link: "https://unifi.solutions/",
        lang: "VUE",
      },
      {
        title: "WRITABLES",
        img: require("@/assets/images/projects/writables.png"),

        date: "Date 3",
        link: "https://new.writables.ae/",
        lang: "VUE",
      },
      {
        title: "MUSLIM",
        img: require("@/assets/images/projects/muslim.png"),

        date: "Date 4",
        link:
          "https://drive.google.com/file/d/1SnIrGXAEO-kR5ygm5Z9c3T89sW3FiAU-/view",
        lang: "VUE",
      },
    ],
    filter: "VUE",
  }),
  computed: {
    filteredProjects() {
      return this.projects.filter((proj) => proj.lang === this.filter);
    },
  },
  methods: {
    tabClickHandler(tb) {
      this.tabs = this.tabs.map((tab) => {
        if (tb.title === tab.title) {
          tab.active = true;
          this.filter = tab.title;
        } else {
          tab.active = false;
        }
        return tab;
      });
    },
    goToPage(project) {
      window.open(project.link, "_black");
    },
  },
};
</script>

<style lang="scss">
.works {
  padding: 100px 20px;

  &__tabs {
    display: flex;

    &__left {
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
    }

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
      color: white;
      opacity: 0.8;
      transition: 0.3s;
      display: inline-block;
      span {
        &:nth-child(1) {
          cursor: pointer;
        }
        &:nth-child(2) {
          margin: 0px 10px;
          cursor: default;
        }
      }

      &:last-child {
        span {
          &:nth-child(2) {
            display: none;
          }
        }
      }
    }
    .tab-active {
      color: $secondary !important;
    }
  }

  &__cover {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 300px;

    &__layout {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgb(255, 255, 255) 100%
      );
      opacity: 0;
      transition: 0.3s;
    }
    &:hover & {
      &__layout {
        opacity: 0.2;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__contain {
      div {
        position: absolute;
        padding: 7px;
        background: rgb(49, 49, 49);
        border-radius: 5px;
        left: 20px;
        transition: 0.4s;
        opacity: 0;

        span {
          color: white;
        }
      }
      &__top {
        bottom: -20px;
      }
      &__bot {
        bottom: -30px;
      }
    }
    &:hover & {
      &__contain {
        &__top {
          bottom: 20px;
          transition-delay: 0.1s;
          opacity: 1;
        }
        &__bot {
          bottom: 20px;
          transition-delay: 0.2s;
          opacity: 1;
        }
      }
    }
  }
  @media (max-width: 960px) {
    padding: 20px;
    &__tabs {
      display: block;

      &__title {
        margin: 0px;
        margin-top: 10px;
      }
      &__tab {
        margin: 0px;
      }
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
