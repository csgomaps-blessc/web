<script setup>
import CardComponent from "@/components/CardComponent.vue";
import { API_URL } from "@/helpers/config.js";
import axios from "axios";
</script>
<template>
    <div class="flex mt-5 flex-col items-center">
        <div class="w-full grid grid-cols-[repeat(auto-fit,minmax(555px,1fr))] 4xl:grid-cols-[repeat(auto-fit,minmax(370px,1fr))] gap-4 justify-evenly justify-items-center">
            <CardComponent @click="this.$router.replace('/map/' + item.publishedfileid)" v-for="item in items" :title="item.title" :description="item.description" :image="item.preview_url" />
        </div>
        <div v-show="loading" class="mt-10 flex justify-center items-center z-50">
            <div class="border-4 border-t-4 border-transparent border-t-accent-100 rounded-full w-16 h-16 animate-spin"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        searchText: {
            type: String,
            default: "",
        },
    },
    watch: {
        searchText(newText) {
            this.items = [];
            this.curentChunkIndex = 0;
            this.loadChunk(50, newText);
        },
    },
    data() {
        return {
            curentChunkIndex: 0,
            items: [],
            loading: false,
        };
    },
    mounted() {
        this.loadChunk(12);
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const documentHeight = document.documentElement.scrollHeight;
            if (scrollTop + windowHeight >= documentHeight - 500) {
                this.loadChunk(this.curentChunkIndex + 50, this.searchText);
            }
        },
        loadChunk(chunkIndex, q = "") {
            if (this.loading) {
                return;
            }

            this.loading = true;
            axios.get(API_URL + "search?q=" + q + "&from=" + this.curentChunkIndex + "&to=" + chunkIndex).then((response) => {
                if (response.data.success == "true") {
                    this.items.push.apply(this.items, response.data.data.response.publishedfiledetails);
                    this.curentChunkIndex = chunkIndex;
                    this.items = this.items.filter((item) => item.hasOwnProperty("creator"));
                }
                this.loading = false;
            });
        },
    },
};
</script>
