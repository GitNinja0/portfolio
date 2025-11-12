<script lang="ts" setup>
import { useProyectsStore } from '@/stores/proyects';

const store = useProyectsStore();

console.log(store.proyect);

</script>

<template>
  <section class="proyects">
    <div class="proyects-inner">
      <header class="proyects-header">
        <h2>Projects</h2>
        <div class="header-line"></div>
      </header>

      <div class="proyects-grid" v-if="store.proyect && store.proyect.length">
        <article v-for="(proyect, idx) in store.proyect" :key="idx" class="proyect-card">
          <div class="card-content">
            <h3 class="proyect-title">{{ proyect.title }}</h3>
            
            <div class="proyect-meta">
              <span class="proyect-type">{{ proyect.type }}</span>
            </div>

            <p class="proyect-description">{{ proyect.description }}</p>

            <div class="proyect-technologies">
              <span v-for="(tech, i) in (proyect.tecnologies || '').split(',').map((t: string) => t.trim())" 
                    :key="i" 
                    class="tech-badge">
                {{ tech }}
              </span>
            </div>
          </div>

          <a :href="proyect.linkRepository" 
             target="_blank" 
             rel="noopener noreferrer"
             class="proyect-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>View Repository</span>
          </a>
        </article>
      </div>

      <div v-else class="empty-state">
        <p>No projects available yet.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.proyects {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(0, 23, 31, 0.5) 0%, rgba(0, 52, 89, 0.3) 100%);
  margin: 2rem 0;

  .proyects-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .proyects-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;

    h2 {
      margin: 0;
      font-size: 2.5rem;
      background: linear-gradient(135deg, #007ea7, #00d4ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      white-space: nowrap;
    }

    .header-line {
      flex: 1;
      height: 2px;
      background: linear-gradient(90deg, #007ea7, transparent);
      border-radius: 2px;
    }
  }

  .proyects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }

  .proyect-card {
    background: linear-gradient(135deg, rgba(0, 126, 167, 0.1), rgba(0, 212, 255, 0.05));
    border: 1px solid rgba(0, 212, 255, 0.2);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
      transition: left 0.6s ease;
      z-index: 0;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0, 212, 255, 0.15);
      border-color: rgba(0, 212, 255, 0.4);

      &::before {
        left: 100%;
      }

      .proyect-link {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .card-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: relative;
      z-index: 1;
    }

    .proyect-title {
      margin: 0;
      font-size: 1.4rem;
      color: #00d4ff;
      font-weight: 700;
    }

    .proyect-meta {
      display: flex;
      gap: 0.75rem;

      .proyect-type {
        display: inline-block;
        background: rgba(0, 212, 255, 0.1);
        color: #00d4ff;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        font-size: 0.85rem;
        font-weight: 600;
        border: 1px solid rgba(0, 212, 255, 0.2);
      }
    }

    .proyect-description {
      margin: 0;
      color: #b8b8b8;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .proyect-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .tech-badge {
        display: inline-block;
        background: rgba(0, 126, 167, 0.15);
        color: #9fbcc6;
        padding: 0.25rem 0.6rem;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 500;
        border: 1px solid rgba(0, 212, 255, 0.1);
      }
    }

    .proyect-link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background: linear-gradient(135deg, #007ea7, #00d4ff);
      color: #ffffff;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      position: relative;
      z-index: 2;
      border: none;
      cursor: pointer;

      svg {
        width: 18px;
        height: 18px;
        transition: transform 0.3s ease;
      }

      &:hover {
        box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
        transform: scale(1.05);

        svg {
          transform: rotate(45deg) scale(1.1);
        }
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }

  .empty-state {
    text-align: center;
    padding: 3rem;
    color: #9fbcc6;

    p {
      font-size: 1.1rem;
      margin: 0;
    }
  }

  @media (max-width: 1024px) {
    .proyects-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;

    .proyects-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 2rem;

      h2 {
        font-size: 2rem;
      }

      .header-line {
        width: 100%;
      }
    }

    .proyects-grid {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1rem;
    }

    .proyect-card {
      padding: 1.5rem;
      gap: 1rem;

      .proyect-title {
        font-size: 1.2rem;
      }

      .proyect-description {
        font-size: 0.9rem;
      }

      .proyect-link {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;

    .proyects-header {
      margin-bottom: 1.5rem;

      h2 {
        font-size: 1.5rem;
      }
    }

    .proyects-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }

    .proyect-card {
      padding: 1.25rem;
      gap: 0.75rem;

      .proyect-title {
        font-size: 1.1rem;
      }

      .proyect-description {
        font-size: 0.85rem;
      }

      .proyect-technologies {
        gap: 0.4rem;

        .tech-badge {
          font-size: 0.75rem;
          padding: 0.2rem 0.5rem;
        }
      }

      .proyect-link {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>