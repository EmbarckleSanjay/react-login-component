import { lazy } from 'react';
// import { ErrorPage } from '../../../components/error';

const appRoutes = {
    publicRoutes: [{
        name: 'SignIn',
        route: '/',
        component: lazy(() =>
            import('containers/auth')
                .then(({ Auth }) => ({ default: Auth }))
        ),
    },
    {
        name: 'signup',
        route: '/signup',
        component: lazy(() =>
            import('containers/signup')
                .then(({ Auth }) => ({ default: Auth }))
        ),
        isNavMenu: true,
        icon: 'icon-dashboard',  
    },
    {
        name: 'forgot password',
        route: '/password',
        component: lazy(() =>
            import('containers/password/index')
                .then(({ password }) => ({ default: password }))
        ),
        isNavMenu: true,
        icon: 'icon-dashboard',  
    },
    
],

    privateRoutes: [{
        name: 'Dashboard',
        route: '/dashboard',
        component: lazy(() =>
            import('containers/dashboard')
                .then(({ Dashboard }) => ({ default: Dashboard }))
        ),
        isNavMenu: true,
        icon: 'icon-dashboard',
    },
   // Add More Private Routes
]
};

export { appRoutes };
