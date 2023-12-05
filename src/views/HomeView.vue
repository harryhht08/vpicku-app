<template>
  <div class="home-container">
    <header class="home-header">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/017/208/926/small/luxury-letter-v-logo-v-logotype-for-elegant-and-stylish-fashion-symbol-vector.jpg"
        alt="VpickU Logo"
        class="logo"
      />
      <h1>Welcome to VpickU Campus Services</h1>
      <p>Conveniently explore and navigate through the campus life!</p>
    </header>
    <section class="service-section">
      <div class="service-card pickup" @click="goToSchedulePickup">
        <h2>Schedule a Pickup</h2>
        <p>
          Get to your classes or dorms with ease. Book a ride and we’ll take
          care of the rest.
        </p>
      </div>
      <div class="service-card tour" @click="goToCampusTour">
        <h2>Discover the Campus</h2>
        <p>
          Join our comprehensive campus tours and get to know your home away
          from home!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToSchedulePickup() {
      this.$router.push("/schedule-pickup");
    },
    goToCampusTour() {
      this.$router.push("/campus-tour");
    },
  },
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 2rem;
  background-color: #f0f8ff;
  color: #444;
}

.home-header {
  margin-bottom: 3rem;
}

.logo {
  max-width: 120px;
  margin-bottom: 1rem;
}

.service-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.service-card {
  border: 2px solid transparent;
  border-radius: 15px;
  padding: 2rem;
  margin: 1rem;
  width: calc(50% - 2rem);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s ease-in-out;
}

.pickup::before {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVhm8TjzB-KSR3RAWIhQKwENf00PmxTGPwaKbjU7DdLCOgOQndO3iFwRYeoBRSJdRrIw&usqp=CAU");
  opacity: 0.7;
}

.tour::before {
  background-image: url("data:image/jpeg;base64,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");
  opacity: 0.7;
}

.service-card:hover::before {
  opacity: 0.5;
}

.service-card:hover {
  color: #fff;
  border-color: #fff;
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

h2 {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0.5rem 0;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
