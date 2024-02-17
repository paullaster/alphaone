<script>
import { useDashboardStore } from '@/store.js';
export default {
    name: "MainDashboard",
    beforeRouteEnter (to, from, next) {
        next((v) => {
            v.dashboardStore.coursesList();
        });
    },
    setup() {
        const dashboardStore = useDashboardStore();
        return { dashboardStore };
    },
    computed: {
        coursesList() {
            return this.dashboardStore.dashboardGetter('courses');
        },
        cols() {
            console.log(this.$vuetify.display);
        }
    }
}

</script>

<template>
    <v-card>
        <v-row  class="mb-6">
            <v-col v-for="course in coursesList" :key="course.id" cols="12">{{ course.name }}</v-col>
        </v-row>
    </v-card>
</template>

<style lang="scss" scoped>

</style>