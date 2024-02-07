<template>
    <v-responsive>
        <v-card color="#000080" height="100vh" flat class="d-flex justify-center align-center">
            <v-card-actions>
                <v-btn size="large" rounded="lg" elevation="4" to="/getstarted" color="black" class="bg-white">
                    get started
                    <v-icon icon="mdi-arrow-left"></v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-responsive>
</template>

<script>
export default {
    name: 'LandingComponent',
}
</script>

<style lang="sass" scoped>

</style>