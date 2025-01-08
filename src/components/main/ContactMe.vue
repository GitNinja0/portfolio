<script>

import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(SERVICEID, TEMPLATEID, this.$refs.form, {
          publicKey: 'Q8lC4Eql-6IyOUaib',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>
<template>
    <div class="container">
        <h2>Contact Me</h2>
        <form @submit.prevent="sendEmail">
            <div class="containerForm">
                <div class="content">
                    <label for="Name">Name</label>
                    <input type="text" id="Name" name="to_name">
                </div>
                <div class="content">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="to_email">
                </div>
            </div>
            <div class="messageContainer">
                <label for="message">Message</label>
                <textarea id="message" name="to_message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>
.container {
    background-color: #333;
    color: white;
    padding: 2rem;
    border-radius: 10px;
    max-width: 600px;
    margin: 2rem auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 1rem;
    text-align: center;
}

input, textarea {
    background-color: #524D4D;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 0.5rem;
}

input {
    width: 100%;
    color: white;
}

textarea {
    width: 100%;
    height: 150px;
    resize: none;
    color: white;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.containerForm {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.messageContainer {
    width: 100%;
    margin-top: 1rem;
}

button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: #524D4D;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #6b6363;
}
</style>
