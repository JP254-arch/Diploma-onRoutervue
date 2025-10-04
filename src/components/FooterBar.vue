<template>
  <footer class="footer">
    <div class="footer-container">
      <p>© 2025 My Vue App | All Rights Reserved</p>
       <p>
        This site and the products and services offered on this site are not associated, affiliated, endorsed. All
        trademarks, logos, and service marks (collectively "Trademarks") displayed are registered and/or unregistered
        Trademarks of their respective owners.
      </p>
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
    border-radius: 25px;

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
    color: #256bc1;
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
    color: #11a9ea;
    text-decoration: wavy underline;
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
