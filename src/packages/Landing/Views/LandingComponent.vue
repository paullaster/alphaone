<template>
  <v-responsive>
    <v-card color="secondary" flat class="customLandingPageStyles">
      <div class="logo">
        <LogoComponent width="150" color="customwhite"/>
      </div>
      <v-card-actions>
        <v-btn
          size="large"
          rounded="lg"
          elevation="4"
          @click="showAuthOption"
          class="bg-primary text-customwhite"
        >
          get started
          <v-icon icon="mdi-arrow-right"></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-responsive>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";
export default {
  name: "LandingComponent",
  components: {
    LogoComponent,
  },
  methods: {
    showAuthOption() {
      this.$router.push({
        name: "getstarted",
        params: {
          option: "login",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.customLandingPageStyles {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  & > .logo {
    height: auto !important;
    margin-bottom: 2.4rem;
  }
}
</style>