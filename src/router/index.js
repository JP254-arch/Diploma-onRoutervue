import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/HomeVue.vue"
import About from "../views/AboutVue.vue"
import Services from "../views/ServicesVue.vue"
import Contact from "../views/ContactVue.vue"
import Vehicles from "../views/VehiclesVue.vue"   // existing route
import PostsVue from "../components/PostsVue.vue" // new component

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/services", name: "Services", component: Services },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/vehicles", name: "Vehicles", component: Vehicles }, // keep this
  { path: "/posts", name: "Posts", component: PostsVue },       // add this
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
