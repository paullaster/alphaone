import DashboardLayout from '@/layouts/DashboardLayout.vue';
import MainComponent from './views/MainComponent.vue';
import ApplicationComponent from './components/ApplicationComponent.vue';

export default {
    path: '/dashboard/:user',
    name: 'dashboard',
    component: DashboardLayout,
    children: [
        {
            path: '',
            components: {
                view: MainComponent,
            }
        },
        {
            path: 'apply',
            name: 'apply',
            components: {
                view: ApplicationComponent,
            }
        }
    ]
}