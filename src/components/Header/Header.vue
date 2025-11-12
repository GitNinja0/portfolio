<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    scrollToSection(sectionId: string): void {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.isMenuOpen = false;
      }
    },
    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
</script>

<template>
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <h1>JM</h1>
            </div>
            
            <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav" :class="{ open: isMenuOpen }">
                <a href="#aboutMe" @click.prevent="scrollToSection('aboutMe')" class="nav-link">
                    <span>About</span>
                </a>
                <a href="#skills" @click.prevent="scrollToSection('skills')" class="nav-link">
                    <span>Skills</span>
                </a>
                <a href="#proyects" @click.prevent="scrollToSection('proyects')" class="nav-link">
                    <span>Projects</span>
                </a>
                <a href="#contact" @click.prevent="scrollToSection('contactMe')" class="nav-link">
                    <span>Contact</span>
                </a>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: linear-gradient(135deg, #00171f 0%, #003459 100%);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 52, 89, 0.3);
    backdrop-filter: blur(10px);
    background-color: rgba(0, 23, 31, 0.95);

    .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }

        h1 {
            color: #fff;
            font-size: 1.8rem;
            font-weight: 700;
            margin: 0;
            background: linear-gradient(135deg, #007ea7, #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }

    .nav {
        display: flex;
        gap: 2rem;
        align-items: center;

        .nav-link {
            color: #e0e0e0;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            position: relative;
            transition: color 0.3s ease;

            span {
                display: inline-block;
                position: relative;
            }

            span::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0;
                height: 2px;
                background: linear-gradient(90deg, #007ea7, #00d4ff);
                transition: width 0.3s ease;
            }

            &:hover {
                color: #00d4ff;

                span::after {
                    width: 100%;
                }
            }

            &:active {
                color: #007ea7;
            }
        }
    }

    .menu-toggle {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        gap: 5px;

        span {
            width: 25px;
            height: 3px;
            background-color: #00d4ff;
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        &.active {
            span:nth-child(1) {
                transform: rotate(45deg) translate(10px, 10px);
            }

            span:nth-child(2) {
                opacity: 0;
            }

            span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -7px);
            }
        }
    }

    @media (max-width: 768px) {
        .header-container {
            padding: 1rem;
        }

        .logo h1 {
            font-size: 1.5rem;
        }

        .menu-toggle {
            display: flex;
        }

        .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 1rem;
            background: linear-gradient(135deg, #00171f 0%, #003459 100%);
            padding: 2rem;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

            &.open {
                max-height: 400px;
            }

            .nav-link {
                font-size: 1.1rem;
                padding: 0.5rem 0;

                span::after {
                    bottom: -2px;
                }
            }
        }
    }

    @media (max-width: 450px) {
        .header-container {
            padding: 0.75rem 1rem;
        }

        .logo h1 {
            font-size: 1.3rem;
        }

        .nav {
            padding: 1.5rem;

            .nav-link {
                font-size: 1rem;
            }
        }
    }
}
</style>