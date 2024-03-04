import CoursesList from './views/CoursesList.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';

export default {
    path: '/dashboard/:user',
    redirect: {name: 'courses'},
    meta: { requiresAuth: true },
    component: DashboardLayout,
    children: [
        {
            path: 'courses',
            name: 'courses',
            components: {
                view: CoursesList,
            }
        }
    ],
}