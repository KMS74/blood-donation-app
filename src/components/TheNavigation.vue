<template>
  <div>
    <v-app-bar app absolute>
      <v-img
        class="mr-4 ml-12"
        src="@/assets/logo.png"
        max-height="50"
        max-width="50"
        contain
      ></v-img>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="path in paths" :key="path.title" :to="path.link">
          {{ path.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-btn
        dark
        large
        to="/register"
        elevation="2"
        class="pa-4 ml-4 hidden-xs-only"
      >
        تسجيل دخول
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary left>
      <v-list>
        <v-list-item
          :to="path.link"
          v-for="path in paths"
          :key="path.title"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ path.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      paths: [
        { title: "الرئيسية", link: "/" },
        { title: "تبرع بالدم", link: "/register" },
        { title: "اطلب الدم", link: "/donorsearch" },
        { title: "من نحن؟", link: "/team" }
      ]
    };
  }
};
</script>

<style></style>
