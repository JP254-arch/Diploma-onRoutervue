<template>
  <section class="vehicles-section">
    <h2>Our Vehicles</h2>

    <!-- Loader -->
    <Loader v-if="loading" />

    <!-- Error -->
    <p v-else-if="error" class="error">{{ error }}</p>

    <!-- Vehicles Grid -->
    <div v-else class="vehicles-grid">
      <div class="vehicle-card" v-for="vehicle in vehicles" :key="vehicle.id">
        <img :src="vehicle.image" :alt="vehicle.title" class="vehicle-image" />
        <h3>{{ vehicle.title }}</h3>
        <p>{{ vehicle.description }}</p>
        <p class="price">${{ vehicle.price }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Loader from "../components/LoaderComponent.vue"

// State
const vehicles = ref([])
const loading = ref(true)
const error = ref(null)

// Use environment variable or default to localhost:3000
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

// Fetch vehicles
const fetchVehicles = async () => {
  try {
    const res = await fetch(`${API_URL}/vehicles`)
    if (!res.ok) throw new Error("Failed to fetch vehicles")
    vehicles.value = await res.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchVehicles)
</script>

<style scoped>
.vehicles-section {
  text-align: center;
  padding: 40px 20px;
  background: #f8fafc;
}

.vehicles-section h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #1e293b;
}

.vehicles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.vehicle-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.vehicle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.vehicle-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.vehicle-card h3 {
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: #1e293b;
}

.vehicle-card p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.5;
}

.price {
  font-weight: bold;
  margin-top: 10px;
  color: #ef4444;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
