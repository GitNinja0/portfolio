<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref<HTMLFormElement | null>(null);
const loading = ref(false);
const submitStatus = ref<'idle' | 'success' | 'error'>('idle');
const statusMessage = ref('');

const sendEmail = async () => {
  if (!form.value) return;

  loading.value = true;
  submitStatus.value = 'idle';

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'SERVICEID',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'TEMPLATEID',
      form.value,
      {
        publicKey: 'Q8lC4Eql-6IyOUaib',
      }
    );
    
    submitStatus.value = 'success';
    statusMessage.value = 'Message sent successfully! I\'ll get back to you soon.';
    form.value.reset();
    
    setTimeout(() => {
      submitStatus.value = 'idle';
    }, 5000);
  } catch (error: any) {
    submitStatus.value = 'error';
    statusMessage.value = 'Failed to send message. Please try again.';
    console.error('Email error:', error.text);
    
    setTimeout(() => {
      submitStatus.value = 'idle';
    }, 5000);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact-inner">
      <header class="contact-header">
        <h2>Get In Touch</h2>
        <p class="subtitle">Have a question or want to work together? Drop me a message!</p>
        <div class="header-line"></div>
      </header>

      <div class="contact-content">
        <form ref="form" @submit.prevent="sendEmail" class="contact-form">
          <div class="form-group-row">
            <div class="form-group">
              <label for="to_name">Name</label>
              <input 
                type="text" 
                id="to_name" 
                name="to_name"
                placeholder="Your name"
                required
                class="form-input"
              >
            </div>
            
            <div class="form-group">
              <label for="to_email">Email</label>
              <input 
                type="email" 
                id="to_email" 
                name="to_email"
                placeholder="your.email@example.com"
                required
                class="form-input"
              >
            </div>
          </div>

          <div class="form-group">
            <label for="to_message">Message</label>
            <textarea 
              id="to_message" 
              name="to_message"
              placeholder="Tell me about your project or inquiry..."
              required
              class="form-textarea"
            ></textarea>
          </div>

          <div v-if="submitStatus !== 'idle'" :class="['status-message', submitStatus]">
            {{ statusMessage }}
          </div>

          <button 
            type="submit" 
            class="submit-btn"
            :disabled="loading"
            :class="{ 'is-loading': loading }"
          >
            <span v-if="!loading">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>

        <div class="contact-info">
          <div class="info-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div>
              <h4>Chat</h4>
              <p>Reach out via email or form above</p>
            </div>
          </div>

          <a href="https://www.linkedin.com/in/juanmunguia" target="_blank" rel="noopener noreferrer" class="info-item info-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.737h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.595zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.771-1.713 1.997-1.713 1.225 0 1.915.758 1.923 1.713 0 .947-.698 1.705-1.923 1.705zm1.946 11.597H3.392V9.715h3.891v10.737zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
            <div>
              <h4>LinkedIn</h4>
              <p>Connect with me on LinkedIn</p>
            </div>
          </a>

          <div class="info-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <h4>Location</h4>
              <p>Spain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(0, 23, 31, 0.5) 0%, rgba(0, 52, 89, 0.3) 100%);
  margin: 2rem 0;

  .contact-inner {
    max-width: 900px;
    margin: 0 auto;
  }

  .contact-header {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 3rem;
    text-align: center;

    h2 {
      margin: 0;
      font-size: 2.5rem;
      background: linear-gradient(135deg, #007ea7, #00d4ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }

    .subtitle {
      margin: 0;
      color: #bfcfd8;
      font-size: 1rem;
    }

    .header-line {
      height: 2px;
      width: 60px;
      background: linear-gradient(90deg, #007ea7, #00d4ff);
      margin: 0.5rem auto 0;
      border-radius: 2px;
    }
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .contact-form {
    background: linear-gradient(135deg, rgba(0, 126, 167, 0.08), rgba(0, 212, 255, 0.03));
    border: 1px solid rgba(0, 212, 255, 0.2);
    padding: 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: #00d4ff;
      font-weight: 600;
      font-size: 0.95rem;
    }
  }

  .form-input,
  .form-textarea {
    background: rgba(1, 33, 41, 0.3);
    border: 1px solid rgba(0, 212, 255, 0.1);
    border-radius: 8px;
    padding: 0.75rem;
    color: #e0e0e0;
    font-family: inherit;
    transition: all 0.2s ease;
    
    &::placeholder {
      color: #7a9aaa;
    }

    &:focus {
      outline: none;
      background: rgba(1, 33, 41, 0.5);
      border-color: rgba(0, 212, 255, 0.3);
      box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
    }

    &:hover {
      border-color: rgba(0, 212, 255, 0.2);
    }
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .status-message {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    text-align: center;
    animation: slideDown 0.3s ease;

    &.success {
      background: rgba(76, 175, 80, 0.15);
      color: #4caf50;
      border: 1px solid rgba(76, 175, 80, 0.3);
    }

    &.error {
      background: rgba(244, 67, 54, 0.15);
      color: #f44336;
      border: 1px solid rgba(244, 67, 54, 0.3);
    }
  }

  .submit-btn {
    background: linear-gradient(135deg, #007ea7, #00d4ff);
    color: #ffffff;
    border: none;
    padding: 0.9rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.6s ease;
    }

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);

      &::before {
        left: 100%;
      }
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &:disabled,
    &.is-loading {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: rgba(0, 126, 167, 0.05);
      border: 1px solid rgba(0, 212, 255, 0.1);
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(0, 126, 167, 0.08);
        border-color: rgba(0, 212, 255, 0.2);
        transform: translateX(4px);
      }

      svg {
        width: 28px;
        height: 28px;
        color: #00d4ff;
        flex-shrink: 0;
        margin-top: 0.25rem;
      }

      h4 {
        margin: 0 0 0.25rem 0;
        color: #00d4ff;
        font-weight: 600;
        font-size: 1.05rem;
      }

      p {
        margin: 0;
        color: #b8b8b8;
        font-size: 0.9rem;
      }
    }

    .info-link {
      text-decoration: none;
      color: inherit;
      cursor: pointer;

      &:hover {
        svg {
          transform: scale(1.1);
        }
      }

      svg {
        transition: transform 0.3s ease;
      }
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;

    .contact-header {
      margin-bottom: 2rem;

      h2 {
        font-size: 2rem;
      }
    }

    .contact-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-form {
      padding: 1.5rem;
    }

    .form-group-row {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;

    .contact-header {
      h2 {
        font-size: 1.5rem;
      }

      .subtitle {
        font-size: 0.9rem;
      }
    }

    .contact-content {
      gap: 1rem;
    }

    .contact-form {
      padding: 1.25rem;
      gap: 1rem;
    }

    .form-group-row {
      gap: 0.75rem;
    }

    .contact-info {
      gap: 1rem;

      .info-item {
        padding: 0.75rem;
        gap: 0.75rem;

        svg {
          width: 24px;
          height: 24px;
        }

        h4 {
          font-size: 0.95rem;
        }

        p {
          font-size: 0.85rem;
        }
      }
    }
  }
}
</style>
