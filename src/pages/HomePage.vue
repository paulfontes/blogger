<script setup>
import { AppState } from '@/AppState.js';
import BlogTemplate from '@/components/BlogTemplate.vue';
import Example from '@/components/Example.vue';
import ModalTime from '@/components/ModalTime.vue';
import { blogService } from '@/services/BlogService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blog)

const account = computed(() => AppState.account)

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
  <div class="container">
    <div class="row ">
      <BlogTemplate v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
  <div>
    <ModalTime>
      efbibfk
    </ModalTime>
  </div>
</template>

<style scoped lang="scss"></style>
