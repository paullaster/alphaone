<template>
    <v-responsive>
        <v-card color="secondary" height="100vh" flat class="customLandingPageStyles">
            <v-card-text>
                <LogoComponent width="150"/>
            </v-card-text>
            <v-card-actions>
                <v-btn size="large" rounded="lg" elevation="4" @click="showAuthOption" class="bg-primary text-customwhite">
                    get started
                    <v-icon icon="mdi-arrow-right"></v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-responsive>
</template>

<script>
import LogoComponent from '@/components/LogoComponent.vue';
export default {
    name: 'LandingComponent',
    components: {
        LogoComponent
    },
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

<style lang="scss" scoped>
 .customLandingPageStyles {
    display: flex !important;
    flex-direction: column;
    & > .v-card-text{
        background-color: red !important;
        height: 20px !important;
        
    }
 }
</style>