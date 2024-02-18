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
                v.dashboardStore.getCourse({id: v.route.params.course});
                v.setupStore.fetchSingleImage({sourceID: btoa(v.route.params.course), })
            });
        },
        setup() {
            const dashboardStore = useDashboardStore();
            const setupStore = useSetupStore();
            return {
                dashboardStore,
                setupStore,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>