<template>
  <v-container class="mt-12 pt-12">
    <v-row align="center" justify="center">
      <p class="text-center display-3">
        تسجيل الدخول
      </p>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn to="/login" text large class="mx-2">لدي حساب مسبقا</v-btn>
      <v-btn to="/register" text large class="mx-2">ليس لدي حساب</v-btn>
    </v-row>
    <v-row class="my-8" align="center" justify="center">
      <v-col lg="7">
        <v-text-field
          v-model="formData.email"
          dense
          label=" البريد الالكتروني"
          outlined
          color="dark"
        ></v-text-field>
        <v-text-field
          v-model="formData.password"
          dense
          outlined
          color="dark"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          label="كلمة المرور"
          @click:append="show = !show"
        ></v-text-field>
        <v-btn @click.prevent="login" dark block large>تسجيل دخول</v-btn>
        <v-btn class="mt-5 primary--text" text link>نسيت كلمة المرور</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.formData);
    }
  }
};
</script>
