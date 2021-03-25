<template>
  <div>
    <hero-section></hero-section>
    <donation-section></donation-section>
    <help-us></help-us>
    <common-questions></common-questions>
    <the-footer></the-footer>
  </div>
</template>

<script>
import CommonQuestions from "../components/home/CommonQuestions.vue";
import DonationSection from "../components/home/DonationSection.vue";
import HelpUs from "../components/home/HelpUs.vue";
import HeroSection from "../components/home/HeroSection.vue";
import TheFooter from "../components/TheFooter.vue";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    HeroSection,
    DonationSection,
    CommonQuestions,
    TheFooter,
    HelpUs
  }
};
</script>
