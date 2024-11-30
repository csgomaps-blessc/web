<script setup>
import LogoComponent from "@/components/LogoComponent.vue";
import { RouterLink } from "vue-router";
</script>
<template>
    <div class="header wrapper-base wrapper-1280 fixed z-20 bg-gradient-to-b from-background-100 to-transparent">
        <div class="h-[70px] py-[9px] [&>*+*]:ml-5 items-center justify-center 2xl:justify-center flex w-full">
            <!-- <LogoComponent class="flex 2xl:hidden 5xl:flex" /> -->

            <div @click="search" class="cursor-text [&_*]:!cursor-text flex h-full bg-primary-100 [&>*]:h-full rounded-full p-1 [&>*]:flex [&>*]:items-center [&>*]:cursor-pointer [&>*]:rounded-full [&>*]:text-text-200 [&>*]:duration-300">
                <div class="focus-within:bg-secondary-100 flex items-center px-2">
                    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input @input="onInputChange" ref="search" type="text" class="w-full h-full ml-2 text-text-100 placeholder:text-text-200" placeholder="Search" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            debounceTimeout: null, // Переменная для хранения timeout
        };
    },
    methods: {
        search() {
            this.$refs.search.focus();
        },
        onInputChange(event) {
            // Очистить предыдущий таймер, если он существует
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }

            // Создаём новый таймер, чтобы отправить текст через 500 мс
            this.debounceTimeout = setTimeout(() => {
                // Отправляем текст в родительский компонент через событие
                this.$emit("search-text-changed", event.target.value);
            }, 500); // Задержка 500 мс
        },
    },
};
</script>
