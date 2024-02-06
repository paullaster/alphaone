<template>
    <v-card elevation="2" color="#000080" height="100vh" class="d-flex justify-center align-center px-2">
        <v-card-items></v-card-items>
        <v-row>
            <v-col cols="12">
                <v-form>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Email address" placeholder="johndoe@gmail.com" type="email"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Password" type="input"
                                hint="Enter your password to access this site"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-btn block class="transparent">
                                Login
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
            <v-cols class="d-flex" plain>
                <v-card-text>New here?</v-card-text>
                <v-btn>
                    create account
                </v-btn>
            </v-cols>
        </v-row>
    </v-card>
</template>

<script>

export default {
    name: 'GetStarted',
}
</script>

<style lang="scss" scoped></style>