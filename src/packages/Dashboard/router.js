import DashboardLayout from '@/layouts/DashboardLayout.vue';
import MainComponent from './views/MainComponent.vue';

export default {
    path: '/dashboard/:user',
    name: 'dashboard',
    component: DashboardLayout,
    children: [
        {
            path: '',
            components: {
                view: MainComponent
            }
        }
    ]
}