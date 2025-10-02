<template>
  <footer class="footer">
    <div class="footer-container">
      <p>© 2025 My Vue App | All Rights Reserved</p>
      <ul class="footer-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    text-align: center;
    background: #000;
    color: white;
    padding: 20px;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    /* stack items vertically */
    align-items: center;
    /* center horizontally */
    text-align: center;
    /* center text */
    gap: 10px;
  }

  .footer p {
    margin: 0;
    font-size: 0.9rem;
  }

  /* Footer links */
  .footer-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  .footer-links a {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
  }

  .footer-links a:hover {
    color: #38bdf8;
  }

  /* ✅ On small screens, links stay centered but can wrap */
  @media (max-width: 600px) {
    .footer-links {
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
  }
</style>
