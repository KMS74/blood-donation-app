<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="my-0 py-0" cols="12">
          <v-card elevation="0">
            <v-card-title>
              <h1 class="display-2 red--text">ادعمنا</h1>
            </v-card-title>
            <v-card-text>
              <p class="headline">
                نتقدم بالشكر الي بجميع الأفراد والجهات المهتمة بدعمم موقعنا
                فبدعمكم فبالتأكيد نصل هدفنا و هو "نشر ثقافة التبرع بالدم"
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="my-0 py-0" cols="12" sm="6">
          <v-text-field dense label="الاسم الكامل" solo></v-text-field
        ></v-col>
        <v-col class="my-0 py-0" cols="12" sm="6">
          <v-text-field dense label="البريد الالكتروني" solo></v-text-field
        ></v-col>
        <v-col class="my-0 py-0" cols="12">
          <v-textarea denses solo name="input-7-4" label="رسالة"></v-textarea>
          <v-btn large dark color="red darken-2">ارسال</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
