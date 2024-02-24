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
import { useDashboardStore } from "@/store";
export default {
  name: "PaymentComponent",
  props: {
    payment: {
      type: Object,
      required: true,
    },
    selectedCourse: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const dashboardStore = useDashboardStore();

    return {
      dashboardStore,
    };
  },
  data() {
    return {
      phoneRules: [
        (value) => !!value || 'Phone number is required',
        (value) => value.length >= 10 || 'Phone number must be at least 10 digits',
        (value) => value.length <= 25 || 'Phone number can not be more than 25 digits',
      ],
      formData: {
        Amount: null,
        phoneNumber: null,
        TransactionType: "CustomerPayBillOnline",
        TransactionDesc: null,
        applicationCode: null,
      },
    };
  },
  computed: {
    paymentDialog: {
      get() {
        return this.dashboardStore.dashboardGetter("paymentDialog");
      },
      set(value) {
        this.dashboardStore.$patch({
          paymentDialog: value,
        });
      },
    },
    dialogToolbarTitle: {
      get() {
        return `Payment for ${this.selectedCourse?.name}`;
      },
    },
  },
  watch: {
    payment: {
      handler(val) {
        if (val) {
          this.formData.Amount = val.balance;
          this.formData.TransactionDesc = this.dialogToolbarTitle;
          this.formData.applicationCode = val.id;
        }
      },
      deep: true,
    },
  },
  methods: {
    async initiatePayment() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.$emit('initiateNIpusher', this.formData);
      this.formData.Amount = null;
      this.formData.phoneNumber = null;
      this.formData.TransactionDesc = null;
      this.formData.applicationCode = null;

      this.dashboardStore.$patch({
        paymentDialog: false,
      });

    } 
  },
};
</script>

<style lang="scss" scoped>
</style>