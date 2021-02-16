<template>
  <v-container class="fill-height pt-12 mb-12">
    <v-row>
      <v-col lg="7">
        <v-card elevation="0">
          <v-card-title class="my-5">
            <h1 class="display-4 font-weight-bold text-break text-right">
              تبرع بالدم انقذ حياة انسان
            </h1>
          </v-card-title>
          <v-card-subtitle>
            <p class="title font-weight-light text-right">
              بكل سهولة نساعد المريض المحتاج الي الدم للوصول الي المتبرع
            </p>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn dark large to="/register" elevation="2" class="pa-4 ">
              تبرع الان
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col lg="5" class="hidden-sm-and-down">
        <v-img
          src="@/assets/undraw_doctors_hwty.png"
          contain
          max-height="500"
          max-width="500"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
