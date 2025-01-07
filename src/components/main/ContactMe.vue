<template>
    <div class="container">
        <h2>Contact Me</h2>
        <form @submit.prevent>
            <div class="containerForm">
                <div class="content">                    
                    <label for="Name">Name</label>
                    <input type="text">
                </div>
                <div class="content">
                    <label for="email">Email</label>
                    <input type="email">
                </div>
            </div>

            <label for="Message">Message</label>
            <textarea name="message" id="message"></textarea>

        </form>
    </div>
</template>
<style scoped>
h2{
    margin: 1rem;
}

input, textarea{
    background-color: #524D4D;
}

input{
    width: 30rem;
    color: white;
}

textarea{
    width: 50rem;
    height: 5rem;
    resize: none;
    color: white;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.containerForm{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem;
}

.content{
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
}
</style>