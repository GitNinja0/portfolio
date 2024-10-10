<script setup lang="ts">
import { useSkillsStore } from '@/stores/skills';

const skillsStore = useSkillsStore();

</script>
<template>
    <div class="container">
        <h2>Skills</h2>

        <section class="skills_container">
            <div class="skills_list" v-for="skills in skillsStore.Skills">
                <p>{{ skills }}</p>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
    .container{
        margin: 1rem;
    }

    .skills_container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;

        .skills_list{
            background-color: #007EA7;
            border-radius: 10px;
            padding: 1rem 1.5rem;
            
            p{
                font-size: 1.5rem;
            }
        }
    }
</style>