<template>
   <v-container fluid>
    <v-card>
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
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)" icon="mdi-file-edit"></v-icon>
            <v-icon small class="mr-2" @click="deleteItem(item)" icon="mdi-delete"></v-icon>
            <v-icon small @click="payNow(item)" icon="mdi-cash-100"></v-icon>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
   </v-container>
</template>

<script>
import  { useDashboardStore } from '@/store';
    export default {
        name: 'ApplicationsList',
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
        computed: {
            headers: {
                get() {
                    return [
                        { title: 'Course', key: 'course' },
                        { title: 'Payment status', key: 'payment' },
                        {title: 'Status', key: 'status' },
                        { title: 'Actions', key: 'actions', sortable: false }
                    ]
                }
            },
            applications: {
                get() {
                    return this.dashboardStore.dashboardGetter('applications');
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>