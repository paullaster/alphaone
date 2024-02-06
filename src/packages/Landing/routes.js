import LandingComponent from './Views/LandingComponent.vue';
import GetStarted  from './components/GetStarted.vue';

export default [
    {
        path: '/landing',
        name: 'landing',
        component: LandingComponent
    },
    {
        path: '/getstarted',
        name: 'getstarted',
        component: GetStarted
    }

]