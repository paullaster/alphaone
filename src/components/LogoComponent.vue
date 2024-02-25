<template>
    <v-img :src="alphaoneLogo" alt="Company Logo" :color="color" :aspect-ratio="1" :width="width" height="20dvh"> </v-img>
</template>

<script>
import alphaoneLogo from '@/assets/images/alphaone-logo.svg';
    export default {
        name: 'LogoComponent',
        props: {
            width: {
                type: String,
                default: '300'
            },
            color: {
                type: String,
                default: 'transparent'
            }
        },
        data() {
            return {
                alphaoneLogo
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>