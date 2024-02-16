<template>
    <div>
        Dashboardd layout
    </div>
</template>

<script>

import { Auth } from '@/utils';
    export default {
        name: "DashboardLayout",
        computed: {
            loggedIn() {
            const val = false;
            if (val === false) {
                this.$router.push({
                    name: 'getstarted',
                    params: {
                        option: 'login',
                    }
                });
            }
            return val;
        }
        }
    }
</script>

<style lang="sass" scoped>

</style>