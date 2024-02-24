<template>
    <v-row justify="space-around">
        <v-col cols="auto">
         <v-dialog
         transition="disalog-bottom-transition"
         width="auto"
         >

         </v-dialog>   
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'PaymentComponent',
        props: {
            payment: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>