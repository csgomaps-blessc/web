import Home from "@/views/Home.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import PublicOffer from "@/views/PublicOffer.vue";
import TermsOfUse from "@/views/TermsOfUse.vue";
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
            path: "/papers/terms",
            name: "terms",
            component: TermsOfUse,
        },
        {
            path: "/papers/privacy-policy",
            name: "privacy",
            component: PrivacyPolicy,
        },
        {
            path: "/papers/public-offer",
            name: "offer",
            component: PublicOffer,
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
