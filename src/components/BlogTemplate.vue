<script setup>
import { Blog } from '@/models/Blog.js';




const props = defineProps({
    blog: { type: Blog, required: true }
})

</script>


<template>
    <div class="col-md-3 blog-body ">
        <img class="img-fluid imgs" :src="blog.imgUrl" alt="">
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.body }}</p>
    </div>
</template>


<style lang="scss" scoped>
.blog-body {
    border: inset 6px grey;

}

.imgs {
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    min-height: 100px;
}
</style>