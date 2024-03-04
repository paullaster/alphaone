<template>
    <v-navigation-drawer class="customNavigationDrawerStyles" >
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" :title="Auth.User()?.name"
                :subtitle="Auth.User()?.email"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Applications" value="applications">
            </v-list-item>
            <v-list-item prepend-icon="mdi-cast-education" title="Courses" value="courses"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="History" value="history"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'SidebarDrawer',
    inject: ['Auth'],
    methods: {
        test(value) {
            console.log("clicked", value);
        }
    },
}
</script>

<style lang="scss" scoped>
.customNavigationDrawerStyles {
    position: fixed !important;
    top: 4.8rem !important;

}
</style>