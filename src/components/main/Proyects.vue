<script lang="ts" setup>
import { useProyectsStore } from '@/stores/proyects';

const store = useProyectsStore();

console.log(store.proyect);


</script>
<template>

    <div class="container">
        <h2>Proyects</h2>

        <div class="proyect_container">
            <div class="proyect" v-for="proyect in store.proyect">
                <h3 class="atributte">{{ proyect.title }}</h3>
                <p class="atributte">{{ proyect.type }}</p>
                <p class="atributte">{{ proyect.description }}</p>
                <p class="atributte">{{ proyect.tecnologies }}</p>
            </div>
        </div>
    </div>

</template>
<style scoped>

    .proyect{
        margin: 1rem;
        padding: 1rem;
        border-radius: 10px;
        background-color: #00A8E8;
        
        .atributte{
            margin-top: 5px;
        }
    }


</style>