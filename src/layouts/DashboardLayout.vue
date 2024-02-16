<template>
    <div>
        Dashboardd layout
    </div>
</template>

<script>

import { Auth } from "@/utils";
    export default {
        name: "DashboardLayout",
        computed: {
            loggedIn() {
            const val = Auth.isLoggedIn();
            if (val === true) {
                this.$router.push({
                    name: 'dashboard',
                    params: {
                        user: Auth.User()?.id,
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