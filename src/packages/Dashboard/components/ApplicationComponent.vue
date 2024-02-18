<template>
    <div>
        application
    </div>
</template>

<script>
    import { useDashboardStore, useSetupStore } from '@/store.js';
    export default {
        name: 'ApplicationComponent',
        beforeRouteEnter (to, from, next) {
            next((v) => {
                v.dashboardStore.getCourse({id: v.$route.params.course});
                v.setupStore.fetchSingleImage({sourceID: btoa(v.$route.params.course), documentType: 'Course'});
            });
        },
        setup() {
            const dashboardStore = useDashboardStore();
            const setupStore = useSetupStore();
            return {
                dashboardStore,
                setupStore,
            }
        },
        computed: {
            course() {
                return this.dashboardStore.dashboardGetter('course');
            },
            image() {
                return this.setupStore.setupGetters('images');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>