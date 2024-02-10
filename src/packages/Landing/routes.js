import LandingComponent from './Views/LandingComponent.vue';
import GetStarted  from './components/GetStarted.vue';

export default {
    path:'',
    name: 'landing',
    redirect: '/landing',
    children: [
        {
            path: '/landing',
            component: LandingComponent
        },
        {
            path: '/getstarted/:option',
            name: 'getstarted',
            component: GetStarted
        }
    ]

}