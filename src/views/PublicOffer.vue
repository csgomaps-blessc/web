<script setup>
import { APP_NAME, APP_URL } from "@/helpers/config.js";
</script>

<template>
    <div class="flex items-center justify-center wrapper-922">
        <div class="flex flex-col relative mt-10">
            <h1 class="text-xl uppercase font-bold mb-6 sm:text-2xl md:text-3xl">Публичная офферта</h1>
            <p class="mb-4">
                Настоящая оферта (далее — "Оферта") является предложением компании <strong>{{ APP_NAME }}</strong
                >, расположенной по адресу <a :href="APP_URL" class="link">{{ APP_URL }}</a
                >, заключить договор на оказание услуг (далее — "Договор") с любым лицом, принявшим условия данной Оферты (далее — "Пользователь").
            </p>
            <h2 class="text-xl font-semibold mb-2">1. Предмет Оферты</h2>
            <p class="mb-4">
                1.1. <strong>{{ APP_NAME }}</strong> предлагает Пользователю воспользоваться услугами по предоставлению VPN (Virtual Private Network) на основании подписки, оформляемой через сайт <a :href="APP_URL" class="link">{{ APP_URL }}</a> (далее — "Сайт").
            </p>
            <p class="mb-4">1.2. Услуга включает доступ к VPN на срок, выбранный Пользователем.</p>
            <h2 class="text-xl font-semibold mb-2">2. Условия платежей</h2>
            <p class="mb-4">2.1. Платежи за услуги осуществляются только через банковские карты.</p>
            <p class="mb-4">2.2. Цены на услуги указаны на Сайте и могут изменяться. Пользователь соглашается с тем, что изменения цен не повлияют на уже оплаченные услуги.</p>
            <h2 class="text-xl font-semibold mb-2">3. Права и обязанности сторон</h2>
            <p class="mb-4">
                3.1. <strong>{{ APP_NAME }}</strong> обязуется:
            </p>
            <ul class="list-disc list-inside mb-4">
                <li>Оказывать услуги в соответствии с условиями данной Оферты.</li>
                <li>Информировать Пользователя о любых изменениях в условиях оказания услуг.</li>
            </ul>
            <p class="mb-4">3.2. Пользователь обязуется:</p>
            <ul class="list-disc list-inside mb-4">
                <li>Предоставлять точную информацию при оформлении подписки.</li>
                <li>Оплачивать услуги в установленные сроки.</li>
            </ul>
            <h2 class="text-xl font-semibold mb-2">4. Акцепт Оферты</h2>
            <p class="mb-4">4.1. Акцептом данной Оферты является совершение Пользователем платежа за услуги.</p>
            <p class="mb-4">
                4.2. Договор считается заключенным с момента получения <strong>{{ APP_NAME }}</strong> подтверждения об успешном платеже.
            </p>
            <h2 class="text-xl font-semibold mb-2">5. Заключительные положения</h2>
            <p class="mb-4">
                5.1. <strong>{{ APP_NAME }}</strong> оставляет за собой право в любое время изменять условия данной Оферты, при этом изменения вступают в силу с момента их публикации на Сайте.
            </p>
            <p class="mb-4">5.2. Все споры, возникающие в связи с настоящей Офертой, будут решаться в соответствии с действующим законодательством Российской Федерации.</p>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$emit("disableBackgroundElement");
    },
};
</script>
