<script>
import { useDashboardStore } from '@/store.js';
export default {
    name: "MainDashboard",
    beforeRouteEnter(to, from, next) {
        next((v) => {
            v.dashboardStore.coursesList();
        });
    },
    setup() {
        const dashboardStore = useDashboardStore();
        return { dashboardStore };
    },
    mounted() {
        console.log(this.$vuetify.display);
    },
    computed: {
        coursesList() {
            return this.dashboardStore.dashboardGetter('courses');
        },
        cols() {
            const { lg, md, sm } = this.$vuetify.display;
            console.log(`lg ${lg} : md ${md} : sm ${sm}`);
            let cl = [];
            if (lg) {
                cl = [4, 4, 4]
            }
            if (md) {
                cl = [6, 6]
            }
            cl = [12]
            return cl;

        },
        loading() {
            return !!this.coursesList;
        }
    }
}

</script>

<template>
    <v-card>
        <v-row class="mb-6">
            <v-col v-for="course in coursesList" :key="course.id" :cols="cols[0]">
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear :active="isActive" color="deep-purple" height="4"
                            indeterminate></v-progress-linear>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<style lang="scss" scoped></style>