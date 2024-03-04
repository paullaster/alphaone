import DashboardLayout from '@/layouts/DashboardLayout.vue';
import MainComponent from './views/MainComponent.vue';
import ApplicationComponent from './components/ApplicationComponent.vue';

export default {
    path: '/dashboard/:user',
    component: DashboardLayout,
    redirect: {name: 'dashboard'},
    children: [
        {
            path: '',
            name: 'dashboard',
            components: {
                view: MainComponent,
            }
        },
        {
            path: 'apply/:course',
            name: 'apply',
            components: {
                view: ApplicationComponent,
            }
        },
    ],
    meta: { requiresAuth: true },
}