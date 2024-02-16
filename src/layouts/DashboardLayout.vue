<template>
    <v-card
      class=" custom-height mx-auto"

    >
      <v-layout>
        <v-app-bar
          color="primary"
          density="compact"
        >
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>
  
          <v-app-bar-title>{{ APPNAME }}</v-app-bar-title>
  
          <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-app-bar>
  
        <v-main>
          <v-container fluid>
            <p>Dashboard</p>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </template>

<script>
import { APPNAME } from '../environment';
import SidebarDrawer from '@/components/SidebarComponent';
export default {
    name: "DashboardLayout",
}
</script>

<style lang="scss" scoped>
.custom-height {
    height: 100dvh;
}
</style>