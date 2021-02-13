<template>
  <v-app>
    <the-navigation></the-navigation>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavigation from "./components/TheNavigation";
export default {
  name: "App",
  components: {
    TheNavigation
  }
};
</script>
