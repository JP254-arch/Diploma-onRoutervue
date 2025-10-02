<template>
  <div class="loader-wrapper">
    <div class="spinner"></div>
    <p>Loading vehicles...</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loader-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 6px solid #e5e7eb; /* light gray */
  border-top: 6px solid #38bdf8; /* blue accent */
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

p {
  font-size: 1rem;
  color: #475569;
  font-weight: 500;
}
</style>
