export default {
    path: '',
    redirect: {name: 'applications'}
    meta: { requiresAuth: true},
    children: [
        {
            path: '/applications',
            name: 'applications',
            components: {
                view: ApplicationsList,
            }
        }
    ],
}