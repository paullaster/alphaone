<template>
    <v-img :src="alphaoneLogo"> </v-img>
</template>

<script>
import alphaoneLogo from '@/assets/images/alphaone-logo.svg';
    export default {
        name: 'LogoComponent',
        data() {
            return {
                alphaoneLogo
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>