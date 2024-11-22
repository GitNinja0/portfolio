import { defineStore } from "pinia";

export const useProyectsStore = defineStore('proyect', ()=>{

    const proyect= [
        {
            title: "Real State",
            description: "",
            type: "Front-End",
            tecnologies: "Vue, JavaScript, Mail.js"
        },
        {
            title: "PrintGO",
            description: "We are a company specialized in high quality 3D printing, offering a wide range of products in both filament and resin. What makes us stand out? Our versatility and attention to detail. From figures from your favorite series to personalized lithophanes, we are here to transform your ideas into tangible reality. This project combines a robust backend with a modern frontend to offer a complete and efficient user experience. The combination of technologies and tools used ensures a scalable and easy-to-maintain application.",
            type: "Front-End",
            tecnologies: "Vue, JavaScript, Mail.js"
        }

    ]
        
      return {proyect} 
})