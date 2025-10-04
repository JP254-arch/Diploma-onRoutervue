<template>
  <section class="contact-section">
    <h2>Contact Us</h2>
    <h3>Feel free to Contact Us</h3>
    <p class="note">📌 Please fill out the form below and we’ll get back to you as soon as possible.</p>

    <form action="https://formspree.io/f/xanpbyrq" method="POST" class="contact-form">
      <!-- Name -->
      <input type="text" name="name" placeholder="Your Name" required />

      <!-- Email -->
      <input type="email" name="email" placeholder="Your Email" required />

      <!-- Message -->
      <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

      <!-- Button -->
      <button type="submit">Send Message</button>
    </form>
  </section>
</template>

<script setup>
  // No JS needed anymore, Formspree handles submission 🎉
</script>

<style scoped>
  .contact-section {
    padding: 40px 20px;
    text-align: center;
  }

  .contact-section h2 {
    margin-bottom: 10px;
    font-size: 2rem;
    color: #1e293b;
  }

  .note {
    margin-bottom: 20px;
    color: #64748b;
    font-size: 0.95rem;
  }

  /* Contact Form Card */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;
    margin: 0 auto;
    background: #ffffff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    text-align: left;
  }

  /* Inputs & Textarea */
  input,
  textarea {
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    resize: none;
    transition: border 0.3s, box-shadow 0.3s;
  }

  input:focus,
  textarea:focus {
    border-color: #38bdf8;
    outline: none;
    box-shadow: 0 0 5px rgba(56, 189, 248, 0.4);
  }

  /* Submit Button */
  button {
    background: #38bdf8;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #0ea5e9;
  }

  /* ✅ Responsive */
  @media (max-width: 600px) {
    .contact-form {
      padding: 15px;
    }

    .contact-section h2 {
      font-size: 1.5rem;
    }

    .note {
      font-size: 0.85rem;
    }
  }
</style>
