<script setup>
import { Blog } from '@/models/Blog.js';




const props = defineProps({
    blog: { type: Blog, required: true }
})

</script>


<template>
    <div class="col-4">
        <img :src="blog.imgUrl" alt="">
    </div>
</template>


<style lang="scss" scoped></style>