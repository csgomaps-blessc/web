<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { watch } from "vue";
import Home from "./views/Home.vue";
</script>

<template>
    <div class="flex flex-col overflow-hidden">
        <HeaderComponent @search-text-changed="updateSearchText" />
        <RouterView :searchText="searchText" class="min-h-screen pt-[70px] wrapper-base wrapper-1152" />
        <FooterComponent class="bottom-0 left-0 right-0" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchText: "", // Переменная для хранения текста поиска
        };
    },
    methods: {
        updateSearchText(text) {
            this.searchText = text; // Обновляем searchText
        },
    },
};
</script>
