<template>
  <div class="cards max-container" id="cards">
    <v-row justify="center">
      <v-col
        class="cards__card "
        sm="6"
        md=4
        cols="12"
        v-for="(card, i) in cards"
        :key="i"
      >
        <div class="cards__card__contain toggle-sub-bg">
          <div class="cards__card__contain__img">
            <img :src="card.img" alt="" />
          </div>
          <div>
            <span>{{ card.title }}</span>
            <span class="white-text toggle-text-color">{{ $t(card.subTitle) }}</span>
          </div>
          <div class="cards__card__contain__icon">
            <v-icon color="white">mdi-chevron-right</v-icon>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "2+",
        subTitle: "card1",
        img: require("@/assets/images/exp.png"),
      },
      {
        title: "7+",
        subTitle: "card2",
        img: require("@/assets/images/exp.png"),
      },
      {
        title: "150+",
        subTitle: "card3",
        img: require("@/assets/images/exp.png"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.cards {
  padding: 100px 20px;

  &__card {
    transition: 0.4s;
    &__contain {
      padding: 40px 30px;
      border-radius: 10px;
      box-shadow: 11px 10px 38px rgb(0 0 0 / 38%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      span {
        display: block;
        font-size: 20px;
        font-weight: 700;

        &:nth-child(1) {
          font-size: 32px;
          color: $secondary;
        }
      }

      &__img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: white;
        padding: 12px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      &__icon{
        cursor: pointer
      }
    }
    &:nth-child(2) & {
      &__contain {
        &__img {
          background: $secondary;
          img {
            filter: invert(1);
          }
        }
      }
    }
    &:nth-child(3) & {
      &__contain {
        &__img {
          background: #1f1f1f !important;
          img {
            filter: invert(1);
          }
        }
      }
    }

    &:hover{
      transform: translateY(-30px)
    }
  }
  @media (max-width: 960px) {
    padding: 50px 20px;
  }
}
</style>
