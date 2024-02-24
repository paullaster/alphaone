<script>
import { useDashboardStore, useSetupStore } from '@/store';
import { APPNAME } from '@/environment';
import { formattingMixin } from '@/mixins';
export default {
    name: "MainDashboard",
    beforeRouteEnter(to, from, next) {
        next((v) => {
            v.dashboardStore.coursesList();
            v.setupStore.getImages({documentType: 'Course'});
        });
    },
    mixins: [formattingMixin],
    setup() {
        const dashboardStore = useDashboardStore();
        const setupStore = useSetupStore();
        return { dashboardStore, setupStore };
    },
    data() {
        return {
            APPNAME,
            scrollInvoked: 0,
        }
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
            return !this.coursesList;
        },
        images() {
            return this.setupStore.setupGetters('images');
        },
    },
    methods: {
        onScroll () {
        this.scrollInvoked++
      },
        getImage(courseId) {
            const url = this.images?.find((img) => {
                return atob(img.sourceID) === courseId
            })?.url;
            console.log(url);
            return url;
        },
        apply(course) {
            this.$router.push({
                name: 'apply',
                params: {
                    course: course,
                }
            })
        }
    }
}

</script>

<template>
    <v-card flat height="auto" class="overflow-y-auto" v-scroll.self="onScroll">
        <v-row class="mb-6">
            <v-col v-for="course in coursesList" :key="course.id" :cols="cols[0]">
                <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear :active="isActive" color="deep-purple" height="4"
                            indeterminate></v-progress-linear>
                    </template>
                    <v-img cover height="250" :src="getImage(course.id)"></v-img>
                    <v-card-item>
                        <v-card-title>{{ course.name }}</v-card-title>

                        <v-card-subtitle>
                            <span class="me-1">Eldoret</span>

                            <v-icon color="error" icon="mdi-map-marker" size="small"></v-icon>
                        </v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :model-value="4.5" color="amber" density="compact" half-increments readonly
                                size="small"></v-rating>

                            <div class="text-grey ms-4">
                                4.5 (2)
                            </div>
                        </v-row>
                        <div class="my-4 text-subtitle-1">
                            $ • {{ APPNAME }}, School
                        </div>

                        <div>{{ course.description }}.</div>
                    </v-card-text>
                    <v-divider class="mx-4 mb-1"></v-divider>
                    <v-card-title>Price: KES. {{ course.price }}</v-card-title>
                    <v-card-text class="mt-4">
                        <v-row align="center" class="mx-0">
                            <div class="text-grey ms-4">
                                Duration: {{ formatDuration(course.duration) }}
                            </div>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="secondary" variant="flat" @click="apply(course.id)">
                            Apply
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<style lang="scss" scoped></style>