<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
    <div class="flex flex-col overflow-hidden">
        <HeaderComponent @search-text-changed="updateSearchText" />
        <RouterView :searchText="searchText" class="min-h-screen pt-[70px] wrapper-base wrapper-1152" />
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
