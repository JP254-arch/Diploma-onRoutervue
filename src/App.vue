<template>
  <div>
    <!-- Logo on top -->
    <div class="logo-wrapper">
      <LogoComponent />
    </div>

    <!-- Navbar below logo -->
    <NavBar />

    <main>
      <router-view />
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
import LogoComponent from "./components/LogoComponent.vue";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<style>
main {
  padding: 20px;
  min-height: 80vh;
}

/* Center logo at the top */
.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background: #fff; /* or brand color */
}
</style>
