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
    }
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
            value => {
                if (value.length < 10) {
                    this.toast.error("Phone number should have at least 10 digits")
                    return false;
                };
                if (!value) {
                    this.toast.error("Phone number is required");
                    return false;
                };
                return true;
            }
        ],
        formData: {
            Amount: null,
            phoneNumber: null,
            TransactionType: "CustomerPayBillOnline", 
            TransactionDesc: null,
            applicationCode: null,
        }
    }
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
    async initiatePayment () {
        try {
            const { valid } = await this.$refs.form.validate();
            if (!valid) {
                console.log(" Valid value  ", valid);
                throw new Error(" Invalid form data!");
            }
        } catch (error) {
            this.toast.error(error.message);
        }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>