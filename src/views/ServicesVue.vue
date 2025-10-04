<template>
  <section class="services-section">
    <h2>Our Services</h2>
    <h3>Best Deals for you awaiting</h3>

    <!-- Services Cards -->
    <div class="services">
      <div class="card" v-for="(service, i) in services" :key="i">
        <img :src="service.icon" :alt="service.title" class="service-icon" />
        <h3>{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="cta">
      <p>Looking for a service? <router-link to="/contact">Get in touch with us today!</router-link></p>
      <p>Let's have greate deals 🤝</p>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "Vehicle Sales",
    desc: "We offer a wide selection of brand new and pre-owned vehicles sourced globally to meet every need.",
    icon: "https://media.istockphoto.com/id/2148823639/photo/handing-over-the-car-keys.webp?a=1&b=1&s=612x612&w=0&k=20&c=JpMVRiN9kL5-0DtwaDNxSaupOW6Cw8InBGwppJLy77Q="
  },
  {
    title: "Vehicle Import & Export",
    desc: "Expert assistance in importing your dream car or exporting vehicles hassle-free.",
    icon: "https://media.istockphoto.com/id/2180881052/photo/transport-and-logistic-concept-manager-and-engineer-checking-and-control-logistic-network.webp?a=1&b=1&s=612x612&w=0&k=20&c=jR_4FjWSoP1Zdf_Ex6uyqwJ6AYz-kvI5wGi59xzGTqo="
  },
  {
    title: "Maintenance & Repairs",
    desc: "Professional servicing, repairs, and parts replacement to keep your car in perfect condition.",
    icon: "https://media.istockphoto.com/id/2214445664/photo/mechanics-discussing-the-diagnosis-of-a-car-at-an-auto-repair-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=VAIjerYHe_rCIKDHM9g3Zo1sPNl2CflPSKxyOh8CVS4="
  },
  {
    title: "Car Customization",
    desc: "Upgrade your vehicle with accessories, paint jobs, and performance enhancements.",
    icon: "https://media.istockphoto.com/id/2180224417/photo/sticker-of-a-protective-film-on-the-headlight-of-a-car-in-a-car-detailing-studio.jpg?s=612x612&w=0&k=20&c=jgvR-OnA0zzqDcWURtZ-tKqtwqmL3BEeBS2SmrG8PeE="
  },
  {
    title: "Fleet Solutions",
    desc: "Tailored packages for corporate fleets including sales, servicing, and fleet management.",
    icon: "https://plus.unsplash.com/premium_photo-1742418317940-04c78ff5b31c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZsZWV0JTIwU29sdXRpb25zfGVufDB8fDB8fHww"
  }
]
</script>

<style scoped>
.services-section {
  text-align: center;
  padding: 60px 20px;
  background: #f8fafc;
}

.services-section h2 {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 40px;
  font-weight: 700;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 25px 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}

.service-icon {
  width: 120px;          /* increased size */
  height: 120px;         /* square size for consistency */
  border-radius: 15px;   /* rounded corners */
  object-fit: cover;
  margin-bottom: 20px;
}

.card h3 {
  margin-bottom: 15px;
  font-size: 1.4rem;
  color: #1e293b;
}

.card p {
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
}

/* Call-to-Action */
.cta {
  margin-top: 50px;
  font-size: 1.1rem;
}

.cta a {
  color: #38bdf8;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.cta a:hover {
  color: #0ea5e9;
}

/* ✅ Responsive adjustments */
@media (max-width: 768px) {
  .services-section h2 {
    font-size: 2rem;
  }

  .card h3 {
    font-size: 1.2rem;
  }

  .card p {
    font-size: 0.95rem;
  }

  .service-icon {
    width: 100px;
    height: 100px;
  }
}
</style>
