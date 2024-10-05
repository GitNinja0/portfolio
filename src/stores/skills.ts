import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSkillsStore = defineStore('skills', ()=>{

   let Skills: string[] = ["Vue.js", "React", "Angular", "Next.js", "HTML5", "CSS/SASS", "Javascript", "Typescript", "Boostrapt", "Tailwind", "Vuetify", "Java", "Spring package", "Spring Security", "AWS", "Vercel", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"];

   return {Skills}
})