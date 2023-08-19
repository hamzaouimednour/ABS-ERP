import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
    // base: '/',
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const middleware = to.meta.middleware;
    const queryLogin = {
        name: "login",
        query: {
            redirect: to.fullPath
        }
    };
    
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // middleware: auth check and get user state.
        store.dispatch("auth/checkAuth").then(() => {
            if (!store.getters["auth/authenticated"]) next();// next(queryLogin);
            else if (!middleware || middleware.includes(store.getters["auth/user"].auth_level)) next();
            else next({name: 'home'});
        });
    }
    else if(to.name === queryLogin.name && store.getters["auth/authenticated"]) next({name: 'home'});
    else next(); // make sure to always call next()!
})

export default router;