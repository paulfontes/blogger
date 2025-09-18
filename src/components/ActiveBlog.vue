<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)


</script>


<template>
    <div v-if="blog">
        <img class="blog-img" :src="blog.imgUrl" alt="">
        <h5>{{ blog.title }}</h5>
        <p>{{ blog.body }}</p>
        <div v-for="tag in blog.tags" :key="tag">
            <span>{{ tag }}</span>
        </div>
        <div class="d-flex justify-content-end me-2">
            <img class="creator-img" :src="blog.creator.picture" alt="">
        </div>
        <p class="text-end me-4">{{ blog.creator.name }}</p>

    </div>




</template>




<style lang="scss" scoped>
.blog-img {
    width: 100%;

}

.creator-img {
    width: 15%;
    aspect-ratio: 1/1;
    border-radius: 50%;
}
</style>