import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Admin from '@/views/Admin.vue'
import Songs from '@/views/Songs.vue'


import {createRouter, createWebHistory} from "vue-router";
import {content} from "@/utils/content";

// const Songs = {
//     template: '<div>Song {{this.$route.params.song}}</div>',
// }
const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/admin-panel', name: 'Admin', component: Admin},
    // {path: '/songs', name: 'Songs', component: Songs},
    {path: '/songs/:song', name: 'Songs', component: Songs, props: true},

]
// content.forEach(item => routes.push({path: item.pagePath, name: item.title, component: item.title.substring(1)}))
//
// routes.forEach(item => console.log(item))


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router