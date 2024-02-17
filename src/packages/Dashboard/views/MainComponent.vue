<script>
import { useDashboardStore } from '@/store.js';
export default {
    name: "MainDashboard",
    beforeRouteEnter (to, from, next) {
        next((v) => {
            v.dashboardStore.courses();
        });
    },
    setup() {
        const dashboardStore = useDashboardStore();
        return { dashboardStore };
    },
    computed: {
        courses() {
            return this.dashboardStore.dashboardGetter('courses');
        }
    }
}

</script>

<template>
    <v-card>
        <v-row>
            <v-col>item</v-col>
        </v-row>
    </v-card>
</template>

<style lang="scss" scoped>

</style>