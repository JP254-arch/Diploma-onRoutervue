<template>
  <nav class="navbar">
    <!-- Full-width navbar -->
    <h1 class="logo" style="color: aqua;">MotorHub</h1>

    <!-- Hamburger (mobile only) -->
    <button class="hamburger" @click="toggleMenu">
      ☰
    </button>

    <!-- Nav Links -->
    <ul :class="['nav-links', { 'show': isOpen }]">
      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
      <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
      <li><router-link to="/vehicles" @click="closeMenu">Vehicles</router-link></li>
      <li><router-link to="/posts" @click="closeMenu">Posts</router-link></li>
      <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
  import { ref } from "vue"

  const isOpen = ref(false)

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const closeMenu = () => {
    isOpen.value = false
  }
</script>

<style scoped>

  /* Navbar Base */
  .navbar {
    width: 95%;
    /* slightly inset so rounded corners show */
    margin: 15px auto;
    /* center with spacing top & bottom */
    background: #1e293b;
    padding: 15px 20px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1000;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    border-radius: 64px;
    /* ✅ Rounded corners */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    /* ✅ Soft shadow */
  }

  /* Logo */
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  /* Nav Links */
  .nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }

  .nav-links li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s, border-bottom 0.3s;
  }

  .nav-links li a:hover {
    color: #38bdf8;
  }

  a.router-link-active {
    border-bottom: 2px solid #38bdf8;
    padding-bottom: 2px;
  }

  /* Hamburger (hidden on desktop) */
  .hamburger {
    display: none;
    font-size: 1.8rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  /* ✅ Responsive Styles */
  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }

    .nav-links {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: #41516d;
      flex-direction: column;
      align-items: center;
      max-height: 0;
      overflow: hidden;
      border-radius: 0 0 64px 64px;
      /* ✅ Rounded only bottom on mobile */
      transition: max-height 0.3s ease-in-out;
    }

    .nav-links.show {
      max-height: 350px;
      /* Adjust for extra links */
    }

    .nav-links li {
      margin: 15px 0;
    }
  }
</style>
