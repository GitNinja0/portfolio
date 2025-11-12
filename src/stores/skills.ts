import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSkillsStore = defineStore('skills', ()=>{

  const Skills = [
    { name: "Vue.js", level: "100%", category: "Frontend", note: "Advanced — primary framework" },
    { name: "React", level: "40%", category: "Frontend", note: "Learning / in progress" },
    { name: "Angular", level: "40%", category: "Frontend", note: "Learning / in progress" },
    { name: "Next.js", level: "40%", category: "Frontend", note: "Learning / in progress" },
    { name: "HTML5", level: "100%", category: "Frontend" },
    { name: "CSS / SASS", level: "100%", category: "Frontend" },
    { name: "JavaScript", level: "95%", category: "Frontend" },
    { name: "TypeScript", level: "90%", category: "Frontend" },
    { name: "Bootstrap", level: "90%", category: "Frontend" },
    { name: "Tailwind CSS", level: "80%", category: "Frontend" },
    { name: "Vuetify", level: "75%", category: "Frontend" },

    { name: "Java", level: "95%", category: "Backend", note: "Strong experience" },
    { name: "Spring Boot", level: "90%", category: "Backend", note: "Backend development & security" },
    { name: "Spring Security", level: "90%", category: "Backend" },

    { name: "AWS", level: "25%", category: "Cloud", note: "Basic knowledge" },
    { name: "Vercel", level: "80%", category: "DevOps", note: "Deployments & hosting" },

    { name: "Figma", level: "100%", category: "Design", note: "Advanced" },
    { name: "Adobe Photoshop", level: "60%", category: "Design", note: "Intermediate" },
    { name: "Adobe Illustrator", level: "60%", category: "Design", note: "Intermediate" },
    { name: "Adobe InDesign", level: "60%", category: "Design", note: "Intermediate" }
  ];

  return { Skills };
})