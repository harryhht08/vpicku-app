<template>
  <div class="pickup-container">
    <h1 class="title">Schedule Your Campus Pickup</h1>
    <div class="form-wrapper">
      <form @submit.prevent="schedulePickup" class="pickup-form">
        <div class="form-group">
          <label for="pickupLocation">Pickup Location</label>
          <input
            type="text"
            id="pickupLocation"
            v-model="pickupLocation"
            placeholder="Enter your location"
            required
          />
        </div>

        <div class="form-group">
          <label for="destination">Destination</label>
          <input
            type="text"
            id="destination"
            v-model="destination"
            placeholder="Enter your destination"
            required
          />
        </div>

        <div class="form-group">
          <label for="pickupDate">Pickup Date</label>
          <input type="date" id="pickupDate" v-model="pickupDate" required />
        </div>

        <div class="form-group">
          <label for="pickupTime">Pickup Time</label>
          <input type="time" id="pickupTime" v-model="pickupTime" required />
        </div>

        <button type="submit" class="submit-button">Schedule Now</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchedulePickup",
  data() {
    return {
      pickupLocation: "",
      destination: "",
      pickupDate: "",
      pickupTime: "",
    };
  },
  methods: {
    schedulePickup() {
      // Handle the form submission logic
      // This should include validation and potentially sending data to a backend server
      alert(
        `Pickup scheduled from ${this.pickupLocation} to ${this.destination} on ${this.pickupDate} at ${this.pickupTime}.`
      );
    },
  },
};
</script>

<style scoped>
.pickup-container {
  background-image: url("https://groometransportation.com/wp-content/uploads/2020/11/Airport-Vector@2x-1024x552.png");
  background-size: cover;
  background-position: center;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.form-wrapper {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;
}

.pickup-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="date"],
input[type="time"] {
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.submit-button {
  background-color: #5c6bc0;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #3f51b5;
}
</style>
