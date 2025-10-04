<template>
  <div class="logo">
    <img :src="src" :alt="alt" class="logo-img" />
  </div>
</template>

<script>
  export default {
    name: "LogoComponent",
    props: {
      src: {
        type: String,
        default: "/images/logo.jpg", // fallback logo
      },
      alt: {
        type: String,
        default: "MotorHub Logo",
      },
      size: {
        type: String,
        default: "120px", // default width
      },
    },
  };
</script>

<style scoped>
  .logo {
    display: flex;
    justify-content: center;
    /* centers horizontally */
    align-items: center;
    /* centers vertically if parent has height */
    width: 100%;
    padding: 15px 0;
    background-color: white;
  }

  /* Logo Image */
  .logo-img {
    width: var(--logo-size, 120px);
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
  }

  /* Hover effect */
  .logo-img:hover {
    transform: scale(1.05);
  }
</style>
