<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import AboutMe from '@/components/main/AboutMe.vue';
import Skills from '@/components/main/Skills.vue';
import Proyects from "@/components/main/Proyects.vue";
import ContactMe from '@/components/main/ContactMe.vue';
</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
    <section id="aboutMe">
      <AboutMe />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="proyects">
      <Proyects />
    </section>

    <section id="contactMe">
      <ContactMe />
    </section>
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style lang="scss" scoped>

</style>
