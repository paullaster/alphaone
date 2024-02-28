<template>
    <div class="pa-4 text-center">
        <v-dialog width="auto" scrollable>
            <v-card>
                <v-card-title>
                    <span class="headline">{{ title }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <span>{{ message }}</span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="accept">{{AccetpLabel || 'Yes'}}</v-btn>
                    <v-btn color="primary" @click="reject">{{RejectLAbel || 'No'}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "ConfirmationComponent",
    }
</script>

<style lang="scss" scoped>

</style>