<template>
  <section class="about-section">
    <div class="about-container">
      <!-- Text Section -->
      <div class="about-text">
        <h2>{{ about.title }}</h2>
        <p v-html="about.support"></p>
      </div>

      <!-- Image Section -->
      <div class="about-image">
        <img :src="about.image.src" :alt="about.image.alt" />
        <!-- Extra text directly under image -->
        <p class="extra-text" style="font-family: sans-serif; color: blue;">{{ about.extraText }}</p>
      </div>
    </div>

    <!-- ✅ Core Values Section -->
    <div class="core-values-section">
      <h2>CORE VALUES</h2>
      <table class="core-values">
        <tbody>
          <tr>
            <td v-for="(value, i) in coreValues" :key="'title-' + i">
              <b><i>{{ value.title }}</i></b>
            </td>
          </tr>
          <tr>
            <td v-for="(value, i) in coreValues" :key="'image-' + i">
              <img :src="value.image" :alt="value.title" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
  export default {
    name: "AboutComponent",
    data() {
      return {
        about: {
          title: "Driving Trust, Delivering Excellence.",
          support:
            "Motorhub Limited is a car dealership incorporated in Kenya dealing with importation and sale of new and second-hand Motor Vehicles. At Motorhub, we pride ourselves in offering quality and carefully sourced Vehicles, guided by our core values and a burning desire to satisfy customer needs.<br /><br />Vehicles in our dealership are sourced from Japan, Thailand, United Kingdom, Australia, South Africa and a host of other countries to ensure variety of units to meet market demand.,",

          image: {
            src: "/images/audi 4.jpg",
            alt: "About illustration",
          },
          extraText:
            "Designed with precision and style, this platform reflects the values of trust, quality, and excellence in the automotive industry.",
        },

        // ✅ Core Values borrowed
        coreValues: [
          { title: "Reliability", image: "/images/reliability.png" },
          { title: "Integrity", image: "/images/integrity.png" },
          { title: "Customer Service", image: "/images/customer -service.png" },
          { title: "Customer Satisfaction", image: "/images/customer-satisfaction.png" },
        ],
      };
    },
  };
</script>

<style scoped>
  .about-section {
    width: 100%;
    padding: 60px 5%;
    background: #f8fafc;
    box-sizing: border-box;
  }

  .about-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
    flex-wrap: wrap;
  }

  .about-text {
    flex: 1 1 50%;
    min-width: 300px;
  }

  .about-text h2 {
    font-size: medium-large;
    color: #259fb4;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .about-text p {
    font-size: 1.2rem;
    color: #475569;
    line-height: 1.8;
  }

  .about-image {
    flex: 1 1 50%;
    min-width: 300px;
    text-align: center;
  }

  .about-image img {
    width: 90%;
    max-width: 500px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .extra-text {
    margin-top: 20px;
    font-size: 1rem;
    color: #334155;
  }

  /* ✅ Core Values Styling */
  .core-values-section {
    margin-top: 60px;
    text-align: center;
  }

  .core-values-section h2 {
    font-size: medium-large;
    color: #0f6185;
    margin-bottom: 20px;
  }

  .core-values {
    width: 100%;
    text-align: center;
    margin: 20px 0;
    border-collapse: collapse;
  }

  .core-values td {
    padding: 10px 15px;
  }

  .core-values img {
    width: 90px;
    height: auto;
  }

  /* ✅ Mobile adjustments */
  @media (max-width: 768px) {
    .about-container {
      flex-direction: column;
      text-align: center;
    }

    .about-text h2 {
      font-size: 2rem;
    }

    .about-image img {
      width: 100%;
      max-width: 400px;
    }

    .core-values-section h2 {
      font-size: 1.6rem;
    }

    .core-values img {
      width: 60px;
    }
  }
</style>
