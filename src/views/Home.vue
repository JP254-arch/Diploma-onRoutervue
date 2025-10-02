<template>
  <section class="home-page">
    <!-- Hero Section -->
    <div class="hero">
      <h1>Welcome to MotorHub</h1>
      <p>Your trusted partner for quality vehicles and unmatched service.</p>
      <router-link to="/services" class="btn">Get Started</router-link>
    </div>

    <!-- Features Section -->
    <div class="features">
      <div class="feature-card" v-for="(feature, i) in features" :key="i">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </div>

    <!-- Top Best Cars Section -->
    <div class="top-cars">
      <h2>Top Best Cars</h2>
      <div class="car-cards">
        <div class="car-card" v-for="(car, i) in topCars" :key="i">
          <img :src="car.image" :alt="car.name" />
          <h3>{{ car.name }}</h3>
          <p>{{ car.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { title: "Speed", desc: "Delivering high-performance vehicles built to thrill every drive." },
  { title: "Reliability", desc: "Engineered for durability and confidence, no matter the road ahead."},
  { title: "Innovation", desc: "Blending modern technology with style to shape the future of driving."},
]

const topCars = [
  {
    name: "Audi A8",
    desc: "Luxury sedan combining comfort, performance, and elegance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmebf2KxPoH0av0r66rzlqyphzrDgWR4SBHg&s"
  },
  {
    name: "BMW X5",
    desc: "Premium SUV designed for adventure and sophistication.",
    image: "https://images.unsplash.com/photo-1635990215241-4d2805d729bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Qk1XJTIwWDV8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Mercedes-Benz C-Class",
    desc: "Stylish sedan offering top-tier safety and advanced features.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwvoLdofwBqe_qEffvP1X3HisX6OtW3SH5g&s"
  }
]
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 40px 20px;
}

/* Hero Section */
.hero {
  margin-bottom: 50px;
}

.hero h1 {
  font-size: 2.5rem;
  color: #1e293b;
}

.hero p {
  margin: 15px 0;
  font-size: 1.2rem;
  color: #475569;
}

.btn {
  display: inline-block;
  background: #38bdf8;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}

.btn:hover {
  background: #0ea5e9;
}

/* Features Section */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}

.feature-card {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #1e293b;
}

/* Top Best Cars Section */
.top-cars {
  margin-top: 60px;
}

.top-cars h2 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 30px;
}

.car-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.car-card {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.car-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}

.car-card img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 15px;
}

.car-card h3 {
  margin-bottom: 10px;
  color: #1e293b;
}

.car-card p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
}

/* ✅ Responsive adjustments */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .feature-card h3,
  .car-card h3 {
    font-size: 1.2rem;
  }

  .feature-card p,
  .car-card p {
    font-size: 0.95rem;
  }
}
</style>
