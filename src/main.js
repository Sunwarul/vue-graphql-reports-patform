import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'


Vue.config.performance = true;
Vue.config.productionTip = false;
Vue.use(CoreuiVue);

import VueQuill from 'vue-quill'
Vue.use(VueQuill)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context';
import VueApollo from 'vue-apollo'
Vue.use(VueApollo)
// HTTP connection to the API
const httpLink = createHttpLink({
    uri: 'http://archive-env.eba-epzwfx8a.me-south-1.elasticbeanstalk.com/graphql/',
})
const token = localStorage.getItem('token');
// AUTH header link
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : "",
        }
    }
});

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

router.beforeEach((to, from, next) => {
    if (token === '' || token === 'null' || token === null) {
        if (to.path === '/login') {
            next();
        } else {
            next({
                path: '/login'
            });
        }
    }
    else {
        next();
    }
})
new Vue({
    el: '#app',
    router,
    apolloProvider,
    store,
    icons,
    template: '<App/>',
    components: {
        App
    }
});