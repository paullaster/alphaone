import CoursesList from './views/CoursesList';
export default {
    path: '',
    name: 'courses',
    redirect: '/courses',
    meta: { requiresAuth: true },
    children: [
        {
            path: '/courses',
            name: 'courses',
            components: {
                view: CoursesList,
            }
        }
    ],
}