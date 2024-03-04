import ApplicationsList from "../Dashboard/components/ApplicationsList.vue";
import DashboardLayout from '@/layouts/DashboardLayout.vue';

export default {
    path: '/dashboard/:user',
    redirect: {name: 'applications'},
    meta: { requiresAuth: true},
    component: DashboardLayout,
    children: [
        {
            path: 'applications',
            name: 'applications',
            components: {
                view: ApplicationsList,
            }
        }
    ],
}