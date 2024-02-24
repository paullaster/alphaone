<template>
   <v-container fluid>
    <v-card height="100dvh" flat>
       <v-card-item>
        <v-card-title>
            <span class="headline">My applications</span>
        </v-card-title>
       </v-card-item>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="applications"
          class="elevation-1"
        >
         <template v-slot:item.course="{ item }">
            <span>{{ getCourseName(item) }}</span>
         </template>
          <template v-slot:item.amount="{ item }">
            <span>KES. {{ item.amount }}</span>
          </template>
          <template v-slot:item.balance="{ item }">
            <span>KES. {{ item.balance }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)" icon="mdi-file-edit"></v-icon>
            <v-icon small class="mr-2" @click="deleteItem(item)" icon="mdi-delete"></v-icon>
            <v-icon small @click="payNow(item)" icon="mdi-cash-100"></v-icon>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
   </v-container>
   <PaymentComponent :payment="paymentObject" :selectedCourse="selectedCourse"/>
</template>

<script>
import  { useDashboardStore } from '@/store';
import  PaymentComponent from './PaymentComponent.vue';
    export default {
        name: 'ApplicationsList',
        components: {
            PaymentComponent
        },
        beforeRouteEnter (to, from, next) {
            next((v) => {
                v.dashboardStore.getApplicationRequest();
            });
        },
        setup() {
            const dashboardStore = useDashboardStore();

            return {
                dashboardStore
            };
        },
        data() {
            return {
                paymentObject: null,
                selectedCourse: null,
        }},
        computed: {
            headers: {
                get() {
                    return [
                        { title: 'Course', key: 'course' },
                        { title: 'Payment status', key: 'payment' },
                        {title: 'Status', key: 'status' },
                        {title: 'Amount', key: 'amount' },
                        {title: 'Balance', key: 'balance' },
                        { title: 'Actions', key: 'actions', sortable: false }
                    ]
                }
            },
            applications: {
                get() {
                    return this.dashboardStore.dashboardGetter('applications');
                }
            },
            coursesList: {
                get() {
                    return this.dashboardStore.dashboardGetter('courses');
                },
            },
        },
        watch: {
            applications: {
                handler(newApplication, oldApplication) {
                    if (oldApplication !== newApplication) {
                        this.dashboardStore.coursesList();
                    };
                },
                deep: true
            }
        },
        methods: {
            getCourseName(application) {
                const { course } = application;
                const foundCourse = this.coursesList?.find(c => c.id === course);
                return foundCourse?.name;
            },
            payNow(application) {
                if (Object.keys(application).length) {
                    this.dashboardStore.$patch({
                        paymentDialog: true,
                    });
                    this.paymentObject = application;
                    const selectedCourse = this.coursesList?.find(c => c.id === application.course);
                    this.selectedCourse = selectedCourse;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>