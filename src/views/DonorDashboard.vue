<template>
  <div>
    <v-navigation-drawer v-model="drawer" app right>
      <v-list>
        <v-list-item
          v-for="list in lists"
          :key="list.link"
          :to="{ name: list.link }"
          link
        >
          <v-list-item-title>{{ list.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        {{ toolBarTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn large color="primary" dark v-bind="attrs" v-on="on">
            {{ donorData.username }}
          </v-btn>
        </template>
        <v-list>
          <v-btn text @click="logout()">تسجيل خروج</v-btn>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    lists: [
      {
        title: "الرئيسية",
        link: "DonorHomePage"
      },
      {
        title: "الحساب الشخصي",
        link: "DonorProfile"
      },
      {
        title: "التبرع بالدم",
        link: "DonorDonation"
      }
    ]
  }),
  computed: {
    donorData() {
      return !this.$store.getters.getDonorData
        ? false
        : this.$store.getters.getDonorData;
    },
    toolBarTitle() {
      if (this.$route.name == "DonorHomePage") {
        return "الرئيسية";
      } else if (this.$route.name == "DonorProfile") {
        return "الحساب الشخصي";
      } else {
        return "التبرع بالدم";
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      console.log("logout");
    }
  }
};
</script>
