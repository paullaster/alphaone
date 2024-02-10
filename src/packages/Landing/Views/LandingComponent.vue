<template>
    <v-responsive>
        <v-card color="#000080" height="100vh" flat class="d-flex justify-center align-center">
            <v-card-actions>
                <v-btn size="large" rounded="lg" elevation="4" @click="showAuthOption" color="black" class="bg-white">
                    get started
                    <v-icon icon="mdi-arrow-right"></v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-responsive>
</template>

<script>
export default {
    name: 'LandingComponent',
    methods: {
        showAuthOption() {
            this.$router.push({
                name: 'getstarted',
                params: {
                    option: 'login',
                },
            });
        }
    },
}
</script>

<style lang="sass" scoped>

</style>