<template>
    <div class="about">

        <div class="tittle_class">    
            <h2>About Me</h2>
            
            <img src="./../../assets/images/_MG_8820.jpg" alt="Juan Image">
        </div>
        <div class="text_class">
            <p> I am a passionate web application developer with experience in Front-End, Back-End, and Cloud. I have a basic level of English and stand out for being flexible, adaptive, and cooperative in team environments. In addition to my development skills, I have experience with WordPress and proficiency in design tools such as Adobe Photoshop, InDesign, Illustrator, and Figma. I work effectively with Agile methodologies like Scrum and have a solid knowledge of design patterns, specifically MVC. I am always willing to take on great challenges and am committed to continuous learning to improve my skills and contribute to the team's success
            </p>
            <br>
            <p> I am a passionate web application developer with experience in Front-End, Back-End, and Cloud. I have a basic level of English and stand out for being flexible, adaptive, and cooperative in team environments. In addition to my development skills, I have experience with WordPress and proficiency in design tools such as Adobe Photoshop, InDesign, Illustrator, and Figma. I work effectively with Agile methodologies like Scrum and have a solid knowledge of design patterns, specifically MVC. I am always willing to take on great challenges and am committed to continuous learning to improve my skills and contribute to the team's success 
            </p>
            <br>
            <p> I am a passionate web application developer with experience in Front-End, Back-End, and Cloud. I have a basic level of English and stand out for being flexible, adaptive, and cooperative in team environments. In addition to my development skills, I have experience with WordPress and proficiency in design tools such as Adobe Photoshop, InDesign, Illustrator, and Figma. I work effectively with Agile methodologies like Scrum and have a solid knowledge of design patterns, specifically MVC. I am always willing to take on great challenges and am committed to continuous learning to improve my skills and contribute to the team's success 
            </p>
        </div>


    </div>
</template>
<style lang="scss" scoped>

.about{
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 1rem 0;

    .tittle_class{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        img{
            border-radius: 100%;
            height: 18rem;
            width: 18rem;
        }
    }

    .text_class{
        margin-top: 2rem;
        width: 95%;
    }
}
</style>