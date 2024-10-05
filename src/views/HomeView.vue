<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import AboutMe from '@/components/main/AboutMe.vue';
import Skills from '@/components/main/Skills.vue';
</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
    <AboutMe />
    <Skills />
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style lang="scss" scoped>

</style>
