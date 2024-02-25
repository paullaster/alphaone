<template>
    <v-img :src="alphaoneLogo" alt="Company Logo" :aspect-ratio="1" class="bg-transparent" cover width="300"> </v-img>
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