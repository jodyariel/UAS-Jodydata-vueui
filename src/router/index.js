import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/profiles/Home.vue'
import Profiles from '../views/profiles/Profiles.vue'
import Editprofiles from '../views/profiles/Editprofiles.vue'
import Pendidikans from '../views/pendidikans/Pendidikans.vue'
import Editpendidikans from '../views/pendidikans/Editpendidikans.vue'
import Kontaks from '../views/kontaks/Kontaks.vue'
import Editkontaks from '../views/kontaks/Editkontaks.vue'
import Works from '../views/works/Works.vue'
import Editworks from '../views/works/Editworks.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles
  },

  {
    path: '/pendidikans',
    name: 'Pendidikans',
    component: Pendidikans
  },
  
  {
    path: '/kontaks',
    name: 'Kontaks',
    component: Kontaks
  },

  {
    path: '/works',
    name: 'Works',
    component: Works
  },

  {
    path: '/editprofiles/:id',
    name: 'Editprofiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editprofiles
  },
  
  {
    path: '/editpendidikans/:id',
    name: 'Editpendidikans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpendidikans
  },

  {
    path: '/editkontaks/:id',
    name: 'Editkontaks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkontaks
  },

  {
    path: '/editworks/:id',
    name: 'Editworks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editworks
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
