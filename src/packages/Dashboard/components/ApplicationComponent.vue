<template>
    <v-container>
        <v-card>
            <v-form>
                <v-row>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="12">
                                <v-card-title>
                                    Couse details
                                </v-card-title>
                            </v-col>
                            <v-col cols="6">
                                <v-card-text>
                                    Name <v-chip>{{ course.name }}</v-chip>
                                </v-card-text>
                            </v-col>
                            <v-col cols="6">
                                <v-card-text>
                                    Duration <v-chip>{{ formatDuration(course.duration) }}</v-chip>
                                </v-card-text>
                            </v-col>
                            <v-col cols="6">
                                <v-card-text>
                                    Cost<v-chip> KES. {{ course.price }}</v-chip>
                                </v-card-text>
                            </v-col>
                            <v-col cols="6">
                                <v-card-text>
                                    Location <v-chip>Eldoret, Kesses</v-chip>
                                </v-card-text>
                            </v-col>
                            <v-col cols="12">
                                <v-card-text>
                                    Description <v-chip>{{ course.description }}</v-chip>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="6">
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
                                <v-select v-model="formData.gender" :items="items" label="Select gender"></v-select>
                            </v-col>
                            <v-col cols="6">
                                <v-btn block color="primary" class="py-6" @click="createApplicationRequest">submit</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import { useDashboardStore, useSetupStore } from '@/store.js';
import { formattingMixin } from '@/mixins';
import { Auth } from '../../../utils';
export default {
    name: 'ApplicationComponent',
    mixins: [formattingMixin],
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
        user() {
            return Auth.User();
        }
    },
    methods: {
        createApplicationRequest() {
            const rawData = {
                course: this.course.id,
                payment: 'Pending',
                status: 'New',
                applicant: '',
                ...this.formData
            }
            const { name, email, ...data } = rawData;
            this.dashboardStore.createApplicationRequest(data);
        }
    },
    watch: {
        user: {
            handler: (newValue) => {
                console.log(newValue);
                if (newValue) {
                    this.formData.name = newValue.name;
                    this.formData.email = newValue.email;
                }
            },
            immediate: true,
        }
    }
}
</script>