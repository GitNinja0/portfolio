<script setup lang="ts">
import { useSkillsStore } from '@/stores/skills';
import { computed } from 'vue';

const skillsStore = useSkillsStore();

// Agrupamos las habilidades por categoría
const groupedSkills = computed(() => {
  // Si la store no está lista o no hay skills, devuelve un objeto vacío
  if (!skillsStore.Skills || skillsStore.Skills.length === 0) {
    return {};
  }
  
  return skillsStore.Skills
    // --- !! ARREGLO DEL BUG "undefined" !! ---
    // Filtramos cualquier skill que no tenga una categoría definida
    .filter(skill => skill.category) 
    .reduce((acc, skill) => {
      const category = skill.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {} as Record<string, typeof skillsStore.Skills>);
});
</script>

<template>
  <div class="container">
    <h2>My Skills</h2>

    <section v-for="(skills, category) in groupedSkills" :key="category" class="skill_category_section">
      <h3>{{ category }}</h3>
      
      <div class="skills_container">
        
        <div 
          v-for="skill in skills" 
          :key="skill.name" 
          class="skill_card"
          :style="{ '--skill-level': skill.level }"
        >
          <div class="skill_header">
            <h4>{{ skill.name }}</h4>
            <span>{{ skill.level }}</span>
          </div>
          
          <div class="skill_progress_bar">
            <div class="skill_progress_level"></div>
          </div>

          <p v-if="skill.note" class="skill_note">{{ skill.note }}</p>
        </div>

      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
/*
 * =========================================
 * ESTILOS ADAPTADOS PARA MODO OSCURO
 * =========================================
 */

.container {
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  font-family: 'Arial', sans-serif;
}

h2 {
  text-align: center;
  font-size: 2.8rem;
  color: #007EA7; // Tu color principal (se ve bien)
  margin-bottom: 3rem;
  font-weight: 600;
}

.skill_category_section {
  margin-bottom: 3rem;

  h3 {
    font-size: 1.75rem;
    // --- ARREGLO MODO OSCURO ---
    color: #f0f0f0; // Texto claro para el H3 (título de categoría)
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #007EA7; // Tu color
    display: inline-block;
    margin-bottom: 1.5rem;
  }
}

.skills_container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.skill_card {
  background-color: #ffffff; // Tarjeta blanca
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  width: 350px;
  box-sizing: border-box;
  border-left: 5px solid #007EA7;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 126, 167, 0.15);
  }

  /*
   * --- ARREGLO MODO OSCURO ---
   * Forzamos los colores de texto DENTRO de la tarjeta
   * para que sean oscuros y legibles sobre el fondo blanco.
   */
  .skill_header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.75rem;

    h4 {
      font-size: 1.25rem;
      color: #007EA7; // Tu color
      margin: 0;
    }

    span {
      font-size: 1rem;
      font-weight: bold;
      color: #333333; // Texto oscuro
    }
  }
  
  .skill_note {
    font-size: 0.9rem;
    color: #666666; // Texto gris oscuro
    font-style: italic;
    margin: 0.75rem 0 0 0;
  }
}


/* --- ESTILOS DE LA BARRA DE PROGRESO (Sin cambios) --- */

.skill_progress_bar {
  width: 100%;
  height: 10px;
  background-color: #f0f0f0; // Gris claro para la base de la barra
  border-radius: 5px;
  overflow: hidden;
}

.skill_progress_level {
  height: 100%;
  width: var(--skill-level); // Usa la variable CSS
  background-color: #007EA7; // Tu color
  border-radius: 5px;

  transform: scaleX(0);
  transform-origin: left;
  animation: fillBar 1.2s ease-out 0.3s forwards;
}

@keyframes fillBar {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>