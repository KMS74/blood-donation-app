<template>
  <div>
    <v-container>
      <h1 class="display-2 my-4">أسئلة شائعة</h1>
      <v-expansion-panels>
        <v-expansion-panel class="mb-4" v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة؟
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
