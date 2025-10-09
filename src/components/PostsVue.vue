<template>
  <div class="vehicles-container">
    <h1 class="page-title">Vehicle List</h1>

    <!-- Success Message -->
    <transition name="fade">
      <div v-if="successMessage" class="success-msg">
        {{ successMessage }}
      </div>
    </transition>

    <!-- Vehicle cards -->
    <div class="vehicle-grid">
      <div class="vehicle-card" v-for="vehicle in vehicles" :key="vehicle.id">
        <img :src="vehicle.image" alt="" class="vehicle-image" />
        <div class="vehicle-info">
          <h2>{{ vehicle.title }}</h2>
          <p v-if="vehicle.description">{{ vehicle.description }}</p>
          <p v-if="vehicle.price">Price: ${{ vehicle.price }}</p>
        </div>
        <div class="vehicle-actions">
          <button class="edit-btn" @click="editVehicle(vehicle)">Edit</button>
          <button class="delete-btn" @click="deleteVehicle(vehicle.id)">Delete</button>
        </div>
      </div>
    </div>

    <!-- Form -->
    <div class="vehicle-form">
      <h2>{{ editId ? "Edit Vehicle" : "Add Vehicle" }}</h2>
      <form @submit.prevent="saveVehicle">
        <input v-model="form.title" placeholder="Title" required />
        <input v-model="form.description" placeholder="Description" />
        <input v-model.number="form.price" placeholder="Price" />
        <input v-model="form.image" placeholder="Image URL" required />
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? "Saving..." : editId ? "Update" : "Add" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      vehicles: [],
      form: { title: "", description: "", price: null, image: "" },
      editId: null,
      loading: false,
      successMessage: ""
    };
  },
  mounted() {
    this.fetchVehicles();
  },
  methods: {
    async fetchVehicles() {
      try {
        const res = await axios.get("http://localhost:3000/vehicles");
        this.vehicles = res.data;
      } catch (err) {
        console.error("Failed to fetch vehicles:", err);
      }
    },
    async saveVehicle() {
      if (!this.form.title || !this.form.image) return;

      this.loading = true;
      try {
        if (this.editId) {
          await axios.put(`http://localhost:3000/vehicles/${this.editId}`, this.form);
          this.successMessage = "✅ Vehicle updated successfully!";
        } else {
          await axios.post("http://localhost:3000/vehicles", this.form);
          this.successMessage = "🚗 Vehicle added successfully!";
        }

        this.form = { title: "", description: "", price: null, image: "" };
        this.editId = null;
        this.fetchVehicles();

        setTimeout(() => (this.successMessage = ""), 3000);
      } catch (err) {
        console.error("Error saving vehicle:", err);
      } finally {
        this.loading = false;
      }
    },
    editVehicle(vehicle) {
      this.form = { ...vehicle };
      this.editId = vehicle.id;
      this.successMessage = "";
    },
    async deleteVehicle(id) {
      try {
        await axios.delete(`http://localhost:3000/vehicles/${id}`);
        this.successMessage = "❌ Vehicle deleted successfully!";
        this.fetchVehicles();
        setTimeout(() => (this.successMessage = ""), 3000);
      } catch (err) {
        console.error("Failed to delete vehicle:", err);
      }
    }
  }
};
</script>

<style scoped>
.vehicles-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.page-title {
  text-align: center;
  margin-bottom: 20px;
  color: #222;
  font-size: 28px;
  font-weight: bold;
}

/* Success Message with animation */
.success-msg {
  text-align: center;
  background-color: #4caf50;
  color: #fff;
  padding: 12px 18px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Vehicle grid */
.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.vehicle-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.vehicle-card:hover {
  transform: translateY(-5px);
}

.vehicle-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.vehicle-info {
  padding: 15px;
}

.vehicle-info h2 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #222;
}

.vehicle-info p {
  margin: 5px 0;
  color: #555;
  font-size: 14px;
}

.vehicle-actions {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px 15px;
}

.edit-btn,
.delete-btn {
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.edit-btn {
  background-color: #4caf50;
  color: #fff;
}

.edit-btn:hover {
  background-color: #45a049;
}

.delete-btn {
  background-color: #f44336;
  color: #fff;
}

.delete-btn:hover {
  background-color: #e53935;
}

/* Stylish Form */
.vehicle-form {
  background: linear-gradient(135deg, #f0f4f8, #ffffff);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.vehicle-form:hover {
  transform: translateY(-3px);
}

.vehicle-form h2 {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.vehicle-form form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.vehicle-form input {
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 15px;
  transition: all 0.2s ease-in-out;
  outline: none;
}

.vehicle-form input:focus {
  border-color: #2196f3;
  box-shadow: 0 0 6px rgba(33,150,243,0.3);
  background-color: #fdfdfd;
}

/* Submit Button */
.submit-btn {
  background: linear-gradient(135deg, #2196f3, #1976d2);
  color: #fff;
  border: none;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.submit-btn:hover {
  background: linear-gradient(135deg, #42a5f5, #1565c0);
  transform: scale(1.03);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
