<template>
  <div class="contact-form toggle-sub-bg">
    <v-form
      @submit.prevent="sendEmail"
      class="form"
      v-model="valid"
    >
      <div>
        <span class="font-14 toggle-text-color">{{ $t("name") }}</span>
        <v-text-field
          label="Name... *"
          prepend-inner-icon="mdi-account-circle-outline"
          hide-details="true"
          dark
          height="50"
          name="name"
          v-model="name"
          solo
          required
          :rules="nameRules"
        ></v-text-field>
      </div>
      <div>
        <span class="font-14 toggle-text-color">{{ $t("email") }}</span>
        <v-text-field
          label="example@gmail.com *"
          prepend-inner-icon="mdi-email"
          hide-details="true"
          height="50"
          solo
          v-model="email"
          name="email"
          dark
          :rules="emailRules"
          required
        ></v-text-field>
      </div>
      <div>
        <span class="font-14 toggle-text-color">{{ $t("phone") }}</span>
        <v-text-field
          label="+90 555 555 55 55"
          prepend-inner-icon="mdi-phone"
          hide-details="true"
          dark
          height="50"
          v-model="phone"
          name="phone"
          solo
        ></v-text-field>
      </div>
      <div>
        <span class="font-14 toggle-text-color">{{ $t("message") }}</span>
        <v-textarea
          :label="$t('messageField') + ' *'"
          prepend-inner-icon="mdi-chat"
          hide-details="true"
          dark
          :rows="4"
          name="message"
          v-model="message"
          solo
          required
          :rules="messageRules"
        ></v-textarea>
      </div>
      <v-btn type="submit" class="mt-2" elevation="2" block :disabled="!valid"
        ><span
          ><strong>{{ $t("send") }}</strong></span
        ></v-btn
      >
    </v-form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data: () => ({
    name: "",
    email: "",
    message: "",
    phone: "",
    valid: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 10) || "Name must be more than 10 characters",
    ],
    messageRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 30) || "Name must be more than 30 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    sendEmail() {
      try {
        emailjs.sendForm(
          "gmail",
          "portfolio_email",
          ".form",
          "user_0QqcsawXPJ9UPqUTXQb6t"
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
      this.phone = "";
    },
  },
};
</script>

<style lang="scss">
.contact-form {
  box-shadow: 11px 10px 38px rgb(0 0 0 / 38%);
  border-radius: 20px;
  padding: 30px;

  .v-input {
    border-radius: 10px;
    padding: 5px 0 15px 0;
    i {
      color: var(--light-text);
      opacity: 0.6;
    }
  }
  .v-input__prepend-inner {
    display: flex;
    align-items: center;
  }
  .v-text-field__slot {
    margin-left: 5px;
    label {
      color: var(--light-text) !important;
      opacity: 0.4;
    }
  }
  .v-textarea {
    label {
      position: relative;
      transform: translateY(-5px);
    }
  }
  .v-input__slot {
    background: var(--light-main-bg) !important;
  }
}
</style>
