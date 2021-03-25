<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <form-wizard
          next-button-text="التالي"
          back-button-text=" السابق"
          finish-button-text="تسجيل الدخول"
          @on-complete="onComplete"
          color="#F44336
"
        >
          <h1 class="display-1 red--text font-weight-bold" slot="title">
            تسجيل الدخول كمتبرع للدم
          </h1>
          <p class=".subtitle-1 text--secondary" slot="title">
            اكمل جميع الخطوات لاتمام عملية تسجبل الدخول
          </p>

          <!-- start first step -->
          <tab-content title="بيانات الحساب">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="formData.firstName"
                  dense
                  label="الاسم الاول"
                  outlined
                  color="dark"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="formData.lastName"
                  dense
                  label="الاسم الاخير"
                  outlined
                  color="dark"
                ></v-text-field>
              </v-col>
            </v-row>
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
              hint="At least 8 characters"
              @click:append="show = !show"
            ></v-text-field>
          </tab-content>
          <!-- end first step -->

          <!-- start second step -->
          <tab-content title="بيانات شخصية">
            <v-row>
              <v-col cols="6">
                <v-select
                  v-model="formData.governorate"
                  outlined
                  dense
                  color="dark"
                  :items="governorates"
                  label="المحافظة"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <!-- <v-select
                  v-model="formData.city"
                  outlined
                  dense
                  color="dark"
                  :items="items"
                  label="المدينة"
                ></v-select> -->
                <v-text-field
                  v-model="formData.city"
                  dense
                  label="المدينة"
                  outlined
                  color="dark"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              v-model="formData.phone"
              dense
              label="الموبايل"
              outlined
              color="dark"
            ></v-text-field>
            <v-menu
              dark
              ref="menuDateOfBirth"
              v-model="menuDateOfBirth"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateOfBirth"
                  dense
                  color="dark"
                  outlined
                  label="تاريخ الميلاد"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                ref="pickerDateOfBirth"
                v-model="dateOfBirth"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="saveDateOfBirth"
              ></v-date-picker>
            </v-menu>
          </tab-content>
          <!-- end second step -->

          <!-- start third step -->
          <tab-content title="بيانات التبرع بالدم">
            <v-menu
              dark
              ref="menuLastDonationDate"
              v-model="menuLastDonationDate"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="lastDonationDate"
                  dense
                  color="dark"
                  outlined
                  label="تاريخ اخر تبرع للدم"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                ref="pickerLastDonationDate"
                v-model="lastDonationDate"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="saveLastDonationDate"
              ></v-date-picker>
            </v-menu>
            <v-select
              v-model="formData.bloodGroup"
              outlined
              dense
              color="dark"
              :items="bloodGroups"
              label="فصيلة الدم"
            ></v-select>
            <v-select
              v-model="formData.bloodBankName"
              outlined
              dense
              color="dark"
              hint="قم باختيار بنك الدم التابع لمحافظتك"
              :items="bloodBanks"
              label="بنك الدم"
            >
              <template v-slot:prepend>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on">
                      mdi-help-circle-outline
                    </v-icon>
                  </template>
                  اختر بنك الدم التابع لمحافظتك
                </v-tooltip>
              </template>
            </v-select>
          </tab-content>
          <!-- end third step -->
        </form-wizard>
        <v-btn to="/login" text color="black">لدي حساب مسبقا</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
export default {
  created() {
    this.$store.dispatch("fetchBloodBanks");
  },
  data() {
    return {
      show: false,
      dateOfBirth: null,
      menuDateOfBirth: false,
      lastDonationDate: null,
      menuLastDonationDate: false,
      governorates: [
        "القاهرة",
        "الجيزة",
        "الأسكندرية",
        "الدقهلية",
        "البحر الأحمر",
        "البحيرة",
        "الفيوم",
        "الغربية",
        "الإسماعلية",
        "المنوفية",
        "المنيا",
        "القليوبية",
        "الوادي الجديد",
        "السويس",
        "اسوان",
        "اسيوط",
        "بني سويف",
        "بورسعيد",
        "دمياط",
        "الشرقية",
        "جنوب سيناء",
        "كفر الشيخ",
        "مطروح",
        "الأقصر",
        "قنا",
        "شمال سيناء",
        "سوهاجs"
      ],
      bloodGroups: ["A+", "B+", "O+", "A-", "B-", "O-", "AB+", "AB-"],
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        governorate: "",
        city: "",
        phone: "",
        bloodGroup: "",
        bloodBankName: ""
      }
    };
  },
  components: {
    FormWizard,
    TabContent
  },
  methods: {
    onComplete() {
      const donorData = {
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        username: this.formData.firstName + "-" + this.formData.lastName,
        email: this.formData.email,
        password: this.formData.password,
        governorate: this.formData.governorate,
        city: this.formData.city,
        phone: this.formData.phone,
        dateOfBirth: this.dateOfBirth,
        lastDonationDate: this.lastDonationDate,
        bloodGroup: this.formData.bloodGroup,
        bloodbank: this.bloodBankID
      };
      this.$store.dispatch("signup", donorData);
    },
    saveDateOfBirth(date) {
      this.$refs.menuDateOfBirth.save(date);
    },
    saveLastDonationDate(date) {
      this.$refs.menuLastDonationDate.save(date);
    }
  },
  computed: {
    bloodBankID() {
      const bank = this.$store.state.bloodBanks.find(
        bank => bank.name === this.formData.bloodBankName
      );
      return bank._id;
    },
    bloodBanks() {
      return this.$store.getters.getBloodBnaksNames;
    }
  },
  watch: {
    menuDateOfBirth(val) {
      val &&
        setTimeout(() => (this.$refs.pickerDateOfBirth.activePicker = "YEAR"));
    },
    menuLastDonationDate(val) {
      val &&
        setTimeout(
          () => (this.$refs.pickerLastDonationDate.activePicker = "YEAR")
        );
    }
  }
};
</script>

<style>
/* customize form wizard to be RTL */
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
