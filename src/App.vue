<script setup>
import ActiveBlog from './components/ActiveBlog.vue';
import ModalTime from './components/ModalTime.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer class=" text-center">
    <ModalTime modalId="active-blog" id="active-blog">
      <ActiveBlog />
    </ModalTime>
  </footer>
</template>

<style lang="scss"></style>
