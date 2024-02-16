<template>
    <v-card class="card-custom">
        <v-layout>
            <v-app-bar
            color="teal"
            >
            <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
            </v-app-bar>
        </v-layout>
    </v-card>
</template>

<script>

import { Auth } from '@/utils';
    export default {
        name: "DashboardLayout",
    }
</script>

<style lang="scss" scoped>
.card-custom {
    background-color: red;
    height: 100dvh;
}
</style>