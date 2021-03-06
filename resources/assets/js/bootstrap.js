
window._ = require('lodash');

require('materialize-css');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
window.VueRouter = require('vue-router');
require('vue-resource');

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    let token = window.localStorage.getItem('token');
    if(token){
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    next();
});

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from "laravel-echo"
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '80b79508ca7018d3bacd'
});
