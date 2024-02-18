<template>
    <div>
        application
    </div>
</template>

<script>
    import { useDashboardStore, useSetupStore } from '@/store.js';
    export default {
        name: 'ApplicationComponent',
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