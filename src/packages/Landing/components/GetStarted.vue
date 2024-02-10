<template>
    <v-card elevation="2" color="#000080" height="100vh" class="d-flex justify-center align-center px-2"
        style="position: relative;">
        <v-card-items></v-card-items>
        <v-row>
            <v-col cols="12">
                <v-form>
                    <v-row>
                        <v-col cols="12" v-for="option in authOption.fields" :key="option.id">
                            <v-text-field :label="option.label" :placeholder="option.placeholder" :type="option.type"
                                :required="option.required" :hint="option.hint"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-btn block class="transparent" @click="authAction">
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
        <v-btn icon="mdi-arrow-left" class="backBtnPosition" @click="$router.back()" v-if="authOption.type !== 'confirm'"></v-btn>
    </v-card>
</template>

<script>
import AuthOptions from '../AuthOptions'

export default {
    name: 'GetStarted',
    computed: {
        authOption() {
            const { option } = this.$route.params;
            return AuthOptions.find((opt) => {
                return opt.type === option;
            });
        }
    },
    methods: {
        authAction() {
            const type = this.authOption.type;
            switch (type) {
                case 'login':
                    console.log("Loggd in");
                    return;
                case 'signup':
                    console.log('Sign up');
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