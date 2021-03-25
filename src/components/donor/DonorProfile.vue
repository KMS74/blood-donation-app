<template>
  <div>
    <v-container>
      <v-alert type="warning">
        هذه الصفحة قيد التطوير حالياً
      </v-alert>
    </v-container>
    <v-container class="text-center mb-4 ">
      <v-row>
        <v-col>
          <v-avatar color="primary" size="100" class="my-6">
            <span class="white--text headline">{{ avatarChars }}</span>
          </v-avatar>
          <v-row>
            <v-col cols="6">
              <v-text-field
                :value="donorData.donor.firstName"
                dense
                label="الاسم الاول"
                outlined
                color="dark"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :value="donorData.donor.lastName"
                dense
                label="الاسم الاخير"
                outlined
                color="dark"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            :value="donorData.email"
            dense
            label="البريد الالكتروني"
            outlined
            color="dark"
          ></v-text-field>
          <v-text-field
            :value="donorData.donor.phone"
            dense
            label="الموبايل"
            outlined
            color="dark"
          ></v-text-field>
          <v-text-field
            :value="donorData.donor.governorate"
            dense
            label="المحافظة"
            outlined
            color="dark"
          ></v-text-field>
          <v-text-field
            :value="donorData.donor.city"
            dense
            label="المدينة"
            outlined
            color="dark"
          ></v-text-field>
          <v-btn large width="250" color="primary">حفظ التغيرات</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    donorData() {
      return !this.$store.getters.getDonorData
        ? false
        : this.$store.getters.getDonorData;
    },
    avatarChars() {
      let name = this.donorData.username;
      let spiltNameArr = name.split(" ");
      let fName = spiltNameArr[0];
      let lName = spiltNameArr[1];
      let fChars = fName.split("")[0];
      let lChars = lName.split("")[0];
      return fChars + " " + lChars;
    }
  }
};
</script>

<style></style>
