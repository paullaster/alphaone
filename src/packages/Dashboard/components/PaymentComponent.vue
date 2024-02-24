<template>
    <v-row justify="space-around">
        <v-col cols="auto">
         <v-dialog
         transition="disalog-bottom-transition"
         width="auto"
         v-model="paymentDialog"
         persistent
         >
         <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
              title="Opening from the bottom"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                color="primary"
                @click="initiatePayment"
              >Pay (KES. {{ payment?.balance }}) now</v-btn>
              <v-btn
                variant="text"
                @click="paymentDialog = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
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