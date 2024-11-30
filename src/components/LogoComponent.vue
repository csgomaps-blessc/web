<script setup>
import { APP_NAME } from "@/helpers/config.js";
</script>
<template>
    <div :class="{ 'cursor-pointer': link === 'true' }" class="flex items-center" @click="changeLocation" @touchstart="changeLocation">
        <img src="@/assets/icons/Logo.svg" class="w-9" />
        <div class="text-xl font-black ml-2">{{ APP_NAME }}</div>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: "true",
        },
    },
    methods: {
        changeLocation() {
            if (this.link === "true") {
                this.$router.push({ name: "home" });
            }
        },
    },
};
</script>
