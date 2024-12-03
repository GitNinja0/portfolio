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
                <div class="buttonRepository">
                    <img src="./../../assets/images/external-link.svg" alt="">
                    <a :href=proyect.linkRepository>Go to Repository</a>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
.proyect_container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
}

    .proyect{
        margin: 1rem;
        padding: 1rem;
        border-radius: 10px;
        background-color: #00A8E8;
        width: 30rem;
        display: flex;
        flex-direction: column;
        
        .atributte{
            margin-top: 5px;
        }
    }

.buttonRepository{
    background-color: #000;
    padding: .5rem;
    margin: 1rem;
    width: 40%;   
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    
    a{
        color: #fff;
        text-decoration: none;
        
    }
}

.buttonRepository:hover{
    background-color: #747373;
}

h3{
    font-weight: bold;
}
</style>