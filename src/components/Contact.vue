<template>
  <div class="contact max-container" id="contact">
    <v-row justify="space-between">
      <v-col cols="12" md="6">
        <div class="contact__left mb-8">
          <LeftTitle title="contactLeftTitle" />
          <div class="contact__left__title">
            <span class="toggle-text-color"
              >{{ $t("contactTitle1") }} <br />
              {{ $t("contactTitle2") }}
            </span>
            <p class="toggle-text-color">
              {{ $t("contactDesc") }}
            </p>
          </div>
        </div>
        <v-row>
          <v-col
            cols="12"
            class="d-flex my-2"
            v-for="(info, i) in infos"
            :key="i"
          >
            <img width="26" height="26" :src="info.img" alt="" />
            <div class="contact__icon">
              <span class="font-600 toggle-text-color font-18"
                >{{ $t(info.title) }}:</span
              >
              <p class="font-300 opacity-6 toggle-text-color">
                {{ info.translated ? $t(info.subTitle) : info.subTitle }}
              </p>
            </div>
          </v-col>
        </v-row>
        <div class="contact__social">
          <div
            class="contact__social__icon"
            v-for="(social, i) in socials"
            :key="i"
          >
            <v-tooltip top color="secondary">
              <template v-slot:activator="{ on, attrs }">
                <a :href="social.link" target="_blank">
                  <v-icon v-bind="attrs" v-on="on">{{ social.icon }}</v-icon>
                </a>
              </template>
              <span>{{ social.title }}</span>
            </v-tooltip>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="5" class="mx-auto">
        <contact-form></contact-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";
import LeftTitle from "./LeftTitle";
export default {
  components: {
    ContactForm,
    LeftTitle,
  },
  data: () => ({
    infos: [
      {
        title: "address",
        subTitle: "Turkey-Konya",
        img: "https://nafie.webrouk.com/html/assets/images/icons/address.png",
        translated: true,
      },
      {
        title: "phone",
        subTitle: "(+90) 554 179 26 69",
        img: "https://nafie.webrouk.com/html/assets/images/icons/phone.png",
        translated: false,
      },
      {
        title: "email",
        subTitle: "noureibo7@gmail.com",
        img: "https://nafie.webrouk.com/html/assets/images/icons/email.png",
        translated: false,
      },
    ],
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
};
</script>

<style lang="scss">
.contact {
  padding: 100px 20px;

  img {
    filter: invert(1) !important;
  }

  &__icon {
    margin-inline-start: 20px;
  }

  &__left {
    display: flex;

    &__head {
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
  }

  &__social {
    margin-inline-start: 45px;
    &__icon {
      transition: 0.3s;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-inline-end: 15px;
      cursor: pointer;
      box-shadow: 0px 1px 20px rgb(0 0 0 / 15%);

      i {
        color: rgb(53, 53, 53) !important;
      }
      &:hover {
        background: $secondary;
        i {
          color: white !important;
        }
      }
    }
  }
  @media (max-width: 960px) {
    &__left{
      display: block;

      &__title{
        margin: 0px;
        margin-top: 10px;
      }
    }
  }  
}
</style>
