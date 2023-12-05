<template>
  <div class="tour-container">
    <h1 class="title">Book Your Campus Tour</h1>
    <div class="form-wrapper">
      <form @submit.prevent="scheduleTour" class="tour-form">
        <div class="form-group">
          <label for="tourDate">Tour Date</label>
          <input type="date" id="tourDate" v-model="tourDate" required />
        </div>

        <div class="form-group">
          <label for="tourTime">Tour Time</label>
          <input type="time" id="tourTime" v-model="tourTime" required />
        </div>

        <div class="form-group">
          <label for="attendees">Number of Attendees</label>
          <input
            type="number"
            id="attendees"
            v-model="attendees"
            min="1"
            required
          />
        </div>

        <button type="submit" class="submit-button">Book Tour</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CampusTour",
  data() {
    return {
      tourDate: "",
      tourTime: "",
      attendees: 1,
    };
  },
  methods: {
    scheduleTour() {
      // Handle the form submission logic
      alert(
        `Campus tour booked on ${this.tourDate} at ${this.tourTime} for ${this.attendees} attendees.`
      );
    },
  },
};
</script>

<style scoped>
.tour-container {
  padding: 2rem;
  background: linear-gradient(135deg, #6bc1c4 25%, #c4e769 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  color: #2c3e50;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
}

.form-wrapper {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.tour-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #34495e;
}

input[type="date"],
input[type="time"],
input[type="number"] {
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.submit-button {
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #2980b9;
}
</style>
