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
              :title=""
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                color="primary"
                variant="flat"
                @click="initiatePayment"
              >Pay (KES. {{ payment?.balance }}) now</v-btn>
              <v-btn
                variant="text"
                @click="isActive.value = false"
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
                return this.dashboardStore.dashboardGetter('paymentDialog');
            },
            set(value) {
                this.dashboardStore.$patch({
                    paymentDialog: value
                });
            }
        },
        course: {
            get() {
                return this.dashboardStore.dashboardGetter('course');
            }
        }
       },
       watch: {
        payment: {
            handler(newValue) {
                this.dashboardStore.getCourse({id: newValue.course});
            },
            deep: true
        }
       }
    }
</script>

<style lang="scss" scoped>

</style>