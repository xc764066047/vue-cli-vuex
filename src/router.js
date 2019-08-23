import Vue from 'vue'
import Router from 'vue-router'
import All from './views/All.vue'
import Willdo from './views/Willdo.vue'
import Haddone from './views/Haddone.vue'

Vue.use(Router)

export default new Router({
	// linkActiveClass:'link-active',
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'all',
			component: All
		},
		{
			path: '/willdo',
			name: 'willdo',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// component: () => import(/* webpackChunkName: "about" */ './views/Willdo.vue')
			component: Willdo
		},
		{
			path: '/haddone',
			name: 'haddone',
			component: Haddone
		}
	]
})