import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Catalog from '../views/Catalog.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/catalog', component: Catalog },
]
 



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
