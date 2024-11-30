<template>
    <div class="w-[370px] cursor-pointer p-4 flex flex-col bg-primary-100 bg-opacity-60 rounded-3xl border duration-200 border-secondary-100 hover:border-secondary-300">
        <div class="mb-4 overflow-hidden w-[338px] h-[198px] rounded-2xl flex justify-center items-center">
            <img :src="image" class="object-cover w-full h-full" />
        </div>
        <div class="mt-auto bottom-4 left-4 right-4 flex flex-col">
            <div class="font-bold text-2xl md:text-3xl mb-2 overflow-hidden whitespace-nowrap text-ellipsis">{{ title }}</div>
            <div class="text-text-200 overflow-hidden whitespace-nowrap text-ellipsis">{{ description }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
    },
};
</script>
