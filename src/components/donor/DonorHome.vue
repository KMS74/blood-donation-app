<template>
  <v-container>
    <v-alert type="warning">
      هذه الصفحة قيد التطوير حالياً
    </v-alert>
  </v-container>
</template>

<script>
export default {
  computed: {
    donorData() {
      return !this.$store.getters.getDonorData
        ? false
        : this.$store.getters.getDonorData;
    }
  }
};
</script>

<style></style>
