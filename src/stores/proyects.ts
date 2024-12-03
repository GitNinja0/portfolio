import { defineStore } from "pinia";

export const useProyectsStore = defineStore('proyect', ()=>{

    const proyect= [
        {
            title: "Real State",
            description: "This web application is a personal project that replicates the functionality of a real estate sales and rental website. It aims to provide a simpler approach to property search. The application features a mail system to notify property owners, as well as functionalities for uploading, editing, and deleting properties.",
            type: "Front-End",
            tecnologies: "Vue, JavaScript, Mail.js",
            linkRepository: "https://github.com/GitNinja0/Personal_Proyect-FrontEnd"
        },
        {
            title: "Real State",
            description: "This web application is a personal project that replicates the functionality of a real estate sales and rental website. It aims to provide a simpler approach to property search. The application features a mail system to notify property owners, as well as functionalities for uploading, editing, and deleting properties.",
            type: "Back-End",
            tecnologies: "Spring Boot, Java, SQL, Docker",
            linkRepository: "https://github.com/GitNinja0/Personal_Proyect-BackEnd"
        },
        {
            title: "PrintGO",
            description: "We are a company specialized in high quality 3D printing, offering a wide range of products in both filament and resin. What makes us stand out? Our versatility and attention to detail. From figures from your favorite series to personalized lithophanes, we are here to transform your ideas into tangible reality. This project combines a robust backend with a modern frontend to offer a complete and efficient user experience. The combination of technologies and tools used ensures a scalable and easy-to-maintain application.",
            type: "Front-End",
            tecnologies: "Vue, JavaScript, Mail.js",
            linkRepository: "https://github.com/GitNinja0/ProjectSomosF5-PrintGo-Frontend-Team2-Gijon23_24"
        },
        {
            title: "PrintGO",
            description: "We are a company specialized in high quality 3D printing, offering a wide range of products in both filament and resin. What makes us stand out? Our versatility and attention to detail. From figures from your favorite series to personalized lithophanes, we are here to transform your ideas into tangible reality. This project combines a robust backend with a modern frontend to offer a complete and efficient user experience. The combination of technologies and tools used ensures a scalable and easy-to-maintain application.",
            type: "Front-End",
            tecnologies: "Spring Boot, Java, SQL, Docker",
            linkRepository: "https://github.com/GitNinja0/ProjectSomosF5-PrintGo-Backend-Team2-Gijon23_24"
        },
        {
            title: "Japan Events Project",
            description: "This project is an events page in Japan, featuring various events across the country. Users can choose which events to participate in based on their date, event capacity, and location. The page includes a login system where users can identify themselves as either regular users or administrators. Administrators have exclusive sections for adding, deleting, and editing events, while regular users can only sign up or withdraw from an event. Upon signing up for an event, users receive a confirmation email to stay informed about the event date.",
            type: "Back-End",
            technologies: "Spring Boot, Java, SQL, Docker",
            linkRepository: "https://github.com/GitNinja0/Back-End_Japan-Events"
        },
        {
            title: "Japan Events Project",
            description: "This project is an events page in Japan, featuring various events across the country. Users can choose which events to participate in based on their date, event capacity, and location. The page includes a login system where users can identify themselves as either regular users or administrators. Administrators have exclusive sections for adding, deleting, and editing events, while regular users can only sign up or withdraw from an event. Upon signing up for an event, users receive a confirmation email to stay informed about the event date.",
            type: "Front-End",
            technologies: "Vue 3, JavaScript, Sass",
            linkRepository: "https://github.com/GitNinja0/Front-End_Japan-Events"
        }

    ]
        
      return {proyect} 
})