<script setup lang="ts">
import { useSkillsStore } from '@/stores/skills';
import { computed } from 'vue';

const skillsStore = useSkillsStore();

const groupedSkills = computed(() => {
  if (!skillsStore.Skills || skillsStore.Skills.length === 0) {
    return {};
  }
  
  return skillsStore.Skills
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
  <section class="skills">
    <div class="skills-inner">
      <h2>Skills</h2>

      <div v-for="(skills, category) in groupedSkills" :key="category" class="skill-category">
        <h3>{{ category }}</h3>
        
        <div class="skills-container">
          <div 
            v-for="skill in skills" 
            :key="skill.name" 
            class="skill-card"
            :style="{ '--skill-level': skill.level } as any"
          >
            <div class="skill-header">
              <h4>{{ skill.name }}</h4>
              <span class="level-badge">{{ skill.level }}</span>
            </div>
            
            <div class="progress-bar">
              <div class="progress-fill"></div>
            </div>

            <p v-if="skill.note" class="skill-note">{{ skill.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(0, 23, 31, 0.5) 0%, rgba(0, 52, 89, 0.3) 100%);
  margin: 2rem 0;

  .skills-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    background: linear-gradient(135deg, #007ea7, #00d4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 3rem;
    font-weight: 700;
  }

  .skill-category {
    margin-bottom: 3rem;

    h3 {
      font-size: 1.5rem;
      color: #00d4ff;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid rgba(0, 212, 255, 0.3);
      display: inline-block;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
  }

  .skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .skill-card {
    background: linear-gradient(135deg, rgba(0, 126, 167, 0.1), rgba(0, 212, 255, 0.05));
    border: 1px solid rgba(0, 212, 255, 0.2);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #00d4ff;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
      transition: left 0.6s ease;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0, 212, 255, 0.15);
      border-color: rgba(0, 212, 255, 0.4);

      &::before {
        left: 100%;
      }
    }

    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 1rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;

      h4 {
        font-size: 1.15rem;
        color: #00d4ff;
        margin: 0;
        font-weight: 600;
      }

      .level-badge {
        font-size: 0.85rem;
        font-weight: 700;
        color: #012a33;
        background: #dff8ff;
        padding: 0.3rem 0.7rem;
        border-radius: 999px;
        white-space: nowrap;
      }
    }
    
    .progress-bar {
      width: 100%;
      height: 8px;
      background: rgba(1, 33, 41, 0.15);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
      z-index: 1;
    }

    .progress-fill {
      height: 100%;
      width: var(--skill-level);
      background: linear-gradient(90deg, #007ea7, #00d4ff);
      border-radius: 999px;
      transform: scaleX(0);
      transform-origin: left;
      animation: fillBar 1.2s ease-out 0.3s forwards;
    }

    .skill-note {
      font-size: 0.85rem;
      color: #b8b8b8;
      font-style: italic;
      margin: 0.75rem 0 0 0;
      position: relative;
      z-index: 1;
    }
  }

  @keyframes fillBar {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .skill-category h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .skills-container {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1rem;
    }

    .skill-card {
      padding: 1.25rem;

      .skill-header h4 {
        font-size: 1rem;
      }

      .skill-note {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .skill-category h3 {
      font-size: 1.1rem;
    }

    .skills-container {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }

    .skill-card {
      padding: 1rem;

      .skill-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        h4 {
          font-size: 0.95rem;
        }

        .level-badge {
          align-self: flex-start;
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>