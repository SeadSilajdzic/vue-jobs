import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import Jobs from "@/views/jobs/Jobs.vue";
import JobDetails from "@/views/jobs/JobDetails.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props: true
    },
    // Redirect from all-jobs (non-existing) route to jobs
    {
        path: '/all-jobs',
        redirect: '/jobs'
    },
    // Catch all 404
    {
        path: '/:catchAll(.*)',
        name: NotFound,
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
