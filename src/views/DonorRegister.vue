<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <form-wizard
          next-button-text="التالي"
          back-button-text=" السابق"
          finish-button-text="تسجيل الدخول"
          @on-complete="onComplete"
          color="#4D4D4D"
        >
          <tab-content title="Personal details">
            <v-text-field label="Regular"></v-text-field>
            <v-text-field label="Regular"></v-text-field>
          </tab-content>
          <tab-content title="Additional Info">
            <v-text-field label="Regular"></v-text-field>
            <v-text-field label="Regular"></v-text-field>
          </tab-content>
          <tab-content title="Last step">
            <v-text-field label="Regular"></v-text-field>
            <v-text-field label="Regular"></v-text-field>
          </tab-content>
        </form-wizard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
export default {
  components: {
    FormWizard,
    TabContent
  },
  methods: {
    onComplete() {
      alert("Done!");
    }
  }
};
</script>
<style>
.vue-form-wizard .wizard-progress-bar {
  float: right;
}

.vue-form-wizard .wizard-card-footer .wizard-footer-left {
  float: right;
}

.vue-form-wizard .wizard-card-footer .wizard-footer-right {
  float: left;
}
</style>
