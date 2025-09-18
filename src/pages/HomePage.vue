<script setup>
import { AppState } from '@/AppState.js';
import Example from '@/components/Example.vue';
import { blogService } from '@/services/BlogService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blog)

onMounted(() => getBlogs())

async function getBlogs() {
  try {
    blogService.getBlogs()
  }
  catch (error) {
    Pop.error(error);
    logger.log('You got an error getting the blogs', error)
  }
}

</script>

<template>

</template>

<style scoped lang="scss"></style>
