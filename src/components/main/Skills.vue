<script setup lang="ts">
import { useSkillsStore } from '@/stores/skills';

const skillsStore = useSkillsStore();
const skillsList = skillsStore.Skills;

console.log(skillsList);

</script>
<template>
    <div>
        <h3>skills</h3>
    </div>
</template>