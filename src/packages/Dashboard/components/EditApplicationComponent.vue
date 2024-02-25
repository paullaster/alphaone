<template>
   <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="disalog-bottom-transition"
        width="auto"
        v-model="editApplicationDialog"
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
                      v-model="formData.name"
                      label="Applicant Name"
                      type="text"
                      required
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.identificationDocument"
                      label="Identification Document"
                      type="text"
                      required
                      :rules="idRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.numberOfLessons"
                      label="Number of agreed lessons"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.status"
                      label="Application Status"
                      required
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.amount"
                      label="Total Fees charged"
                      required
                      aria-disabled="true"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.balance"
                      label="Remain amount to pay (Your balance)"
                      required
                      aria-disabled="true"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="formData.course"
                      label="Course Applied"
                      required
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
        props: {
            editApplication: {
                type: Object,
                required: true,
            },
            courses: {
                type: Array,
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
                formData: {
                    name: null,
                    identificationDocument: null,
                    gender: null,
                    numberOfLessons: null,
                    status: null,
                    amount: null,
                    balance: null,
                    course: null,
                }
            }
        },
        computed: {
            editApplicationDialog: {
                get() {
                    return this.dashboardStore.dashboardGetter('setEditApplicationDialog');
                },
                set(value) {
                    this.dashboardStore.$patch({setEditApplicationDialog : value});
                },
            },
            dialogToolbarTitle: {
                get() {
                    return `Edit application for ${getCourseName(this.editApplication?.course)}this.dashboardStore.dashboardGetter('setDialogToolbarTitle')`;
                },
                set(value) {
                    this.dashboardStore.$patch({setDialogToolbarTitle : value});
                },
            },
        },
        methods: {
            getCourseName (item) {
                const course = this.courses?.find(c => c.id === item);
                return course?.name;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>