// components route matchmaking
const component_1 = '/inventory';

const routes = [
    // app main routes
    {
        path: '/',
        component: () => import('../views/Home.vue'),
        name: 'home'
    },
    {
        path: '/login',
        component: () => import('../views/Login.vue'),
        name: 'login'
    },
    {
        path: '/auth',
        component: () => import('../views/Home.vue'),
        name: 'auth',
        children: [],
    },
    {
        path: '/auth/users',
        component: () => import('../views/auth/users/Users.vue'),
        name: 'auth.users',
        // meta: { requiresAuth: true },
        children: []
    },
    {
        path: '/auth/users/add',
        component: () => import('../views/auth/users/UsersAdd.vue'),
        name: 'auth.users.add'
    },
    {
        path: '/auth/entreprises',
        component: () => import('../views/auth/entreprises/Entreprises.vue'),
        name: 'auth.entreprises',
        // meta: { requiresAuth: true },
        children: []
    },
    {
        path: '/auth/entreprises/add',
        component: () => import('../views/auth/entreprises/EntreprisesAdd.vue'),
        name: 'auth.entreprises.add'
    },
    {
        path: '/auth/components',
        component: () => import('../views/auth/components/Components.vue'),
        name: 'auth.components',
        // meta: { requiresAuth: true },
        children: []
    },
    {
        path: '/auth/components/add',
        component: () => import('../views/auth/components/ComponentsAdd.vue'),
        name: 'auth.components.add'
    },
    {
        path: '/auth/modules',
        component: () => import('../views/auth/modules/Modules.vue'),
        name: 'auth.modules',
        // meta: { requiresAuth: true },
        children: []
    },
    {
        path: '/auth/modules/add',
        component: () => import('../views/auth/modules/ModulesAdd.vue'),
        name: 'auth.modules.add'
    },
    {
        path: '/auth/permissions',
        component: () => import('../views/auth/permissions/Permissions.vue'),
        name: 'auth.permissions',
        // meta: { requiresAuth: true },
        children: []
    },
    {
        path: '/auth/permissions/add',
        component: () => import('../views/auth/permissions/PermissionsAdd.vue'),
        name: 'auth.permissions.add'
    },
    {
        path: '/auth/entreprises-licenses',
        component: () => import('../views/auth/entreprises-licenses/Licenses.vue'),
        name: 'auth.entreprises-licenses',
        // meta: { requiresAuth: true },
        children: []
    },
    {
        path: '/auth/entreprises-licenses/add',
        component: () => import('../views/auth/entreprises-licenses/LicensesAdd.vue'),
        name: 'auth.entreprises-licenses.add'
    },
    {
        path: '/auth/logout',
        redirect: {name: 'home'},
        name: 'auth.logout',
        meta: { requiresAuth: true }
    },
    {
        path: '/auth/profile',
        component: () => import('../views/auth/Profile.vue'),
        name: 'auth.profile',
        meta: { requiresAuth: true }
    },
    {
        path: '/auth/mid-check',
        component: () => import('../views/auth/Profile.vue'),
        name: 'auth.mid-check',
        meta: { requiresAuth: true, middleware: [2] }
    },
    // app {{component}} routes
    // {
    //     path: component_1,
    //     name: 'component_1',
    //     meta: { requiresAuth: true, middleware: [] },
    //     children: []

    // },
    // route 404
    // {
    //     path: '*',
    //     component: () => import('../views/404.vue'),
    //     name: '404'
    // }
]

export default routes;