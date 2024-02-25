<template>
  <v-card class="custom-height mx-auto">
    <v-layout>
      <v-app-bar color="primary" density="compact" class="customAppBarStyles">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title >{{ APPNAME }}</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical" color="customwhite"></v-btn>
        </template>
      </v-app-bar>
      <SidebarDrawer v-show="viewSidebar" />
      <v-main>
        <router-view name="view"></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { APPNAME } from "../environment";
import SidebarDrawer from "../components/SidebarComponent.vue";
export default {
  name: "DashboardLayout",
  components: {
    SidebarDrawer,
  },
  data() {
    return {
      APPNAME: APPNAME,
      viewSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.viewSidebar = !this.viewSidebar;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-height {
  min-height: 100dvh;

  .customAppBarStyles {
    height: 8.8dvh;
    position: fixed !important;
  }
}
</style>