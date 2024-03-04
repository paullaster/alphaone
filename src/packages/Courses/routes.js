import CoursesList from './views/CoursesList.vue';
export default {
    path: '/dashboard/:user',
    name: 'courses',
    redirect: '/courses',
    meta: { requiresAuth: true },
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