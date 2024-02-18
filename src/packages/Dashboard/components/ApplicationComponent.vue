<template>
    <v-container>
        <v-card>
            <v-form>
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="formData.name" label="Full name"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="formData.email" label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="formData.identificationNumber"
                            label="Identification document number"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="formData.age" label="Age"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-select v-model="formData.gender" :items="items" 
                            label="Select gender"></v-select>
                    </v-col>
                    <v-col cols="6">
                        <v-btn block color="primary" >submit</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import { useDashboardStore, useSetupStore } from '@/store.js';
export default {
    name: 'ApplicationComponent',
    beforeRouteEnter(to, from, next) {
        next((v) => {
            v.dashboardStore.getCourse({ id: v.$route.params.course });
            v.setupStore.fetchSingleImage({ sourceID: btoa(v.$route.params.course), documentType: 'Course' });
        });
    },
    setup() {
        const dashboardStore = useDashboardStore();
        const setupStore = useSetupStore();
        return {
            dashboardStore,
            setupStore,
        }
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                identificationNumber: '',
                age: '',
                gender: ''
            }
        }
    },
    computed: {
        course() {
            return this.dashboardStore.dashboardGetter('course');
        },
        image() {
            return this.setupStore.setupGetters('image');
        },
        items() {
            return ['Male', 'Female', 'Prefer not to say'];
        },
    }
}
</script>