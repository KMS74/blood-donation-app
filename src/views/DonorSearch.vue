<template>
  <v-container class="mt-12 pt-12">
    <v-row align="center" justify="center">
      <h1 class="display-2 font-weight-bold">البحث عن متبرعين بالدم</h1>
    </v-row>
    <v-row class="mt-12">
      <v-col cols="6">
        <v-select
          v-model="formData.governorate"
          outlined
          color="dark"
          :items="governorates"
          label="المحافظة"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="formData.bloodGroup"
          outlined
          color="dark"
          :items="bloodGroups"
          label="فصيلة الدم"
        ></v-select>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn @click.prevent="searchDonors" dark x-large width="200">
        <v-icon left>fas fa-search</v-icon>
        ابحث
      </v-btn>
    </v-row>
    <v-row
      class="mt-12 p-12"
      v-if="isFoundDonors === false"
      align="center"
      justify="center"
    >
      <p class="title red--text">لم يتم العثور عن متبرعين</p>
    </v-row>
    <v-row v-if="isFoundDonors === true" class="mt-12 pt-12">
      <v-col cols="4" v-for="donor in donors" :key="donor._id">
        <v-card elevation="1" shaped>
          <v-card-title class="justify-center headline font-weight-bold">
            <div>
              {{
                donor.firstName + " " + donor.lastName + " " + donor.bloodGroup
              }}
            </div>
          </v-card-title>
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>fas fa-map-marker-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="donor.city + ' / ' + donor.governorate"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>fas fa-mobile-alt</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="donor.phone"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
        governorate: "",
        bloodGroup: ""
      }
    };
  },
  computed: {
    donors() {
      return this.$store.getters.getSearchedDonors;
    },
    isFoundDonors() {
      return this.$store.state.isFoundDonors;
    }
  },
  methods: {
    searchDonors() {
      this.$store.dispatch("searchForDonors", this.formData);
      console.log(this.formData);
    }
  }
};
</script>
