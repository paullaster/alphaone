<template>
    <v-row justify="space-around">
        <v-col cols="auto">
         <v-dialog
         transition="disalog-bottom-transition"
         width="auto"
         v-model="paymentDialog"
         >
         </v-dialog>   
        </v-col>
    </v-row>
</template>

<script>
import { useDashboardStore } from '@/store';
    export default {
        name: 'PaymentComponent',
        props: {
            payment: {
                type: Object,
                required: true
            }
        },
        setup() {
            const dashboardStore = useDashboardStore();

            return {
                dashboardStore,
            }
        },
       computed: {
        paymentDialog: {
            get() {
                return this.dashboardStore.paymentDialog;
            },
            set(value) {
                this.dashboardStore.$patch({
                    paymentDialog: value
                });
            }
        }
       } 
    }
</script>

<style lang="scss" scoped>

</style>