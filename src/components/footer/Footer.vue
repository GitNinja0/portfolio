<template>
    <div class="Footer_container">
        
        <div class="copy-container">
            <img class="copy" src="../../assets/images/copy.svg" alt="copyright image">
            <p class="copy_text">2024 Juan Munnguia (gitninja0). All rights reserved</p>
        </div>

        <div class="social_media">
            <img src="../../assets/images/LinkedIn.svg" alt="LinkedIn image">
            <img src="../../assets/images/GitHub.svg" alt="Github image">
        </div>

    </div>
</template>
<style lang="scss" scoped>

.Footer_container{
    background-color: #00171F;
    display: flex;
    justify-content: space-around;
    padding: 1rem;

    .copy-container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 1rem;
        align-items: center;
    }
}
</style>