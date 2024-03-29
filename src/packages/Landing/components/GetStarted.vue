<template>
    <v-card elevation="2" color="secondary" height="100vh" class="d-flex justify-center align-center px-2"
        style="position: relative;">
        <v-card-items></v-card-items>
        <v-row>
            <v-col cols="12">
                <v-form>
                    <v-row>
                        <v-col cols="12" v-for="option in authOption.fields" :key="option.id">
                            <v-text-field :label="option.label" :placeholder="option.placeholder" :type="option.type"
                                :required="option.required" :hint="option.hint"
                                v-model="formData[option.value]"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-btn block class="transparent text-customwhite" color="primary" @click="authAction">
                                {{ authOption?.button?.caption }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
            <v-cols class="d-flex align-items: center" v-if="authOption.hasOptions">
                <v-btn class="ml--2 font-weight-light text-capitalize text-left" variant="plain" @click="authOptionActions">
                    {{ authOption.options.text }}
                </v-btn>
            </v-cols>
        </v-row>
        <v-btn icon="mdi-arrow-left" class="backBtnPosition text-customwhite" color="secondary" @click="$router.back()"
            v-if="authOption.type !== 'confirm'"></v-btn>
    </v-card>
</template>

<script>
import AuthOptions from '../AuthOptions';
import { useAuthStore } from '@/store';
import { Auth } from '@/utils';

export default {
    name: 'GetStarted',
    setup() {
        const authStore = useAuthStore();

        return { authStore };
    },
    data() {
        return {
            formData: {
                email: '',
                name: '',
                password: '',
                confirmPassword: '',

            }
        }
    },
    computed: {
        email() {
            const { email } = this.$route.params;
            return email;
        },
        authOption() {
            const { option } = this.$route.params;
            return AuthOptions.find((opt) => {
                return opt.type === option;
            });
        },
        loggedIn() {
            const val = Auth.isLoggedIn();
            if (val === true) {
                this.$router.push({
                    name: 'dashboard',
                    params: {
                        user: Auth.User()?.id,
                    }
                });
            }
            return val;
        }
    },
    methods: {
        authAction() {
            const type = this.authOption.type;
            switch (type) {
                case 'login':
                    this.authStore.login({ email: this.formData.email, password: this.formData.password });
                    return;
                case 'signup':
                    this.authStore.confirmEmail({ email: this.formData.email });
                    return;
                case 'confirm':
                    this.formData.email = atob(this.email);
                    this.authStore.createAccount(this.formData);
                    return;
                default: return;

            }
        },
        authOptionActions() {
            const type = this.authOption.type;
            switch (type) {
                case 'login':
                    this.$router.replace({
                        name: 'getstarted',
                        params: {
                            option: 'signup',
                        },
                    });
                    return;
                case 'signup':
                    this.$router.replace({
                        name: 'getstarted',
                        params: {
                            option: 'login',
                        },
                    });
                    return;
                default: return;

            }
        }
    },
    watch: {
        loggedIn(val) {
            console.log(val);
            if (val === true) {
                this.$router.push({
                    name: 'dashboard',
                    params: {
                        user: Auth.User()?.id,
                    }
                });
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.backBtnPosition {
    background-color: #fff;
    position: absolute;
    bottom: 4%;
}
</style>