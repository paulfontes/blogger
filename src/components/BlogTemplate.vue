<script setup>
import { Blog } from '@/models/Blog.js';
import { blogService } from '@/services/BlogService.js';

const props = defineProps({
    blog: { type: Blog, required: true }
})

function setActiveBlog() {
    blogService.setActiveBlog(props.blog)




}


</script>


<template>
    <div @click="setActiveBlog()" type="button" data-bs-target="#active-blog" data-bs-toggle="modal"
        class="col-md-3 blog-body ">
        <img class="img-fluid imgs" :src="blog.imgUrl" alt="">
        <h1>{{ blog.title }}</h1>
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