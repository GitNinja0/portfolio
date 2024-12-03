<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  methods: {
    scrollToSection(sectionId: string): void {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
});
</script>

<template>
    <div class="Header">
        <h1>Juan Munguia</h1>
        <nav class="nav">
            <a href="#aboutMe" @click.prevent="scrollToSection('aboutMe')">About</a>
            <a href="#skills" @click.prevent="scrollToSection('skills')">Skills</a>
            <a href="#proyects">Proyects</a>
            <a href="#">Contact</a>
        </nav>
    </div>
</template>
<style lang="scss" scoped>

.Header{
    background-color: #00171F;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;

    @media (max-width: 450px) {
        h1{
            margin-bottom: 1rem;
        }
    }

    .nav{
        display: flex;
        flex-direction: row;
        gap: 1rem;

        a{
            color: #fff;
            text-decoration: none;
        }
        a:hover{
            color: #003459;
        }
        a:active{
            color: #007EA7;
        }
        
    }
}

</style>