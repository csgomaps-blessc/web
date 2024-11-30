import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/map/:mapId",
            name: "map",
            redirect: (route) => {
                window.location.href = "https://steamcommunity.com/sharedfiles/filedetails/?id=" + route.params.mapId;
            },
        },
    ],
});

export default router;
