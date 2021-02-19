import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bloodBanks: [],
    donorUser: null,
    token: null
  },
  getters: {
    getBloodBnaksNames(state) {
      let bloodBanksNames = [];
      if (state.bloodBanks.length > 0) {
        bloodBanksNames = state.bloodBanks.map(bank => bank.name);
      }
      return bloodBanksNames;
    },
    getDonorData(state) {
      return state.donorUser;
    },

    isAuthenticated(state) {
      return state.token !== null;
    }
  },
  mutations: {
    updateBloodBanks(state, payload) {
      state.bloodBanks = payload;
    },
    authDonorUser(state, donorUserData) {
      state.token = donorUserData.jwt;
      state.donorUser = donorUserData.user;
    },
    removeAuthDonorData(state) {
      state.token = null;
      state.donorUser = null;
    }
  },
  actions: {
    fetchBloodBanks({ commit }) {
      axios
        .get("/bloodbanks/get")
        .then(response => {
          commit("updateBloodBanks", response.data);
        })
        .catch(error => console.log(error));
    },

    async signup({ commit }, authData) {
      try {
        const responseOne = await axios.post("/donors", {
          firstName: authData.firstName,
          lastName: authData.lastName,
          governorate: authData.governorate,
          city: authData.city,
          phone: authData.phone,
          dateOfBirth: authData.dateOfBirth,
          lastDonationDate: authData.lastDonationDate,
          bloodGroup: authData.bloodGroup,
          bloodbank: authData.bloodbank
        });
        console.log(responseOne.data);
        try {
          const responseTwo = await axios.post("/auth/local/register", {
            username: authData.firstName + " " + authData.lastName,
            email: authData.email,
            password: authData.password,
            donor: responseOne.data._id
          });
          commit("authDonorUser", responseTwo.data);
          localStorage.setItem("token", responseTwo.data.jwt);
          router.push({ name: "DonorHomePage" });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async login({ commit }, authData) {
      try {
        const response = await axios.post("/auth/local", {
          identifier: authData.email,
          password: authData.password
        });
        console.log(response.data);
        commit("authDonorUser", response.data);
        // localStorage.setItem("token", response.data.jwt);
        router.push({ name: "DonorHomePage" });
      } catch (error) {
        console.log(error);
      }
    },

    logout({ commit }) {
      commit("removeAuthDonorData");
      router.push({ name: "DonorLogin" });
    }
  },
  modules: {}
});
