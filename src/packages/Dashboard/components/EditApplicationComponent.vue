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
            <v-toolbar color="primary" :title="dialogToolbarTitle"></v-toolbar>
            <v-card-text>
              <v-form ref="form">
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.Amount"
                      label="Amount"
                      type="number"
                      required
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.phoneNumber"
                      label="Phone Number"
                      type="tel"
                      required
                      :rules="phoneRules"
                      placeholder="Please enter M-PESA registered number for payments"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.TransactionDesc"
                      label="Description"
                      required
                      disabled
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn color="primary" variant="flat" @click="initiatePayment"
                >Pay (KES. {{ payment?.balance }}) now</v-btn
              >
              <v-btn variant="text" @click="isActive.value = false"
                >Close</v-btn
              >
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
        name: 'EditApplicationComponent',
        setup() {
            const dashboardStore = useDashboardStore();

            return {
                dashboardStore,   
            }
        },
        computed: {
            editApplicationDialog: {
                get() {
                    return this.$store.state.editApplicationDialog;
                },
                set(value) {
                    this.$store.commit('setEditApplicationDialog', value);
                },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>