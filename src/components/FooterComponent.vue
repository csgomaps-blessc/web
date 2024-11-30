<script setup>
import LogoComponent from "@/components/LogoComponent.vue";
import { APP_NAME, TG_SUPPORT_URL, EMAIL_SUPPORT } from "@/helpers/config.js";
</script>
<template>
    <div class="wrapper-base wrapper-1152 py-16">
        <div class="border-secondary-200 bg-primary-100 border rounded-3xl p-6 flex flex-col w-full 2xl:flex-row 2xl:w-fit [&>*+*]:mt-4 2xl:[&>*+*]:ml-4 2xl:[&>*>*+*]:mt-2 relative z-10">
            <div class="flex flex-col justify-between">
                <LogoComponent class="mb-4" />
                <div class="text-sm">© {{ year }} {{ APP_NAME }}. Все права защищены.</div>
            </div>
            <div class="flex flex-col">
                <div class="text-2xl font-black mb-4">ИНФОРМАЦИЯ</div>
                <RouterLink :to="{ name: 'privacy' }" class="text-sm text-text-200 cursor-pointer hover:underline">Политика конфиденциальности</RouterLink>
                <div class="flex flex-col-reverse md:flex-row md:[&>*+*]:ml-2">
                    <RouterLink :to="{ name: 'offer' }" class="text-sm text-text-200 cursor-pointer hover:underline">Публичная оферта</RouterLink>
                    <RouterLink :to="{ name: 'terms' }" class="text-sm text-text-200 cursor-pointer hover:underline">Пользовательское соглашение</RouterLink>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="text-2xl font-black mb-4 cursor-pointer" hover:underline>КОНТАКТЫ</div>
                <a :href="'mailto:' + EMAIL_SUPPORT" class="text-sm text-text-200 cursor-pointer hover:underline">{{ EMAIL_SUPPORT }}</a>
                <a :href="TG_SUPPORT_URL" class="text-sm text-text-200 cursor-pointer hover:underline">Поддержка</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>
