<template>
  <div class="weather-widget">
    <q-card v-if="weatherData.main">
      <q-card-section>
        <div class="text-h6">{{ weatherData.name }}</div>
        <div class="text-subtitle2">{{ weatherData.weather[0].description }}</div>
      </q-card-section>
      <q-card-section>
        <q-linear-progress
          :value="weatherData.main.temp"
          :min="minTemp"
          :max="maxTemp"
          color="primary"
        />
        <div v-if="weatherData.main.temp">Temperature: {{ weatherData.main.temp }}°C</div>
      </q-card-section>
    </q-card>
    <div v-else>Loading...</div>

    <q-input outlined v-model="searchQuery" placeholder="Search location"></q-input>
    <q-btn @click="searchLocation" label="Search"></q-btn>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WeatherWidget',
  data() {
    return {
      weatherData: {},
      apiKey: '94bf6d59f86ae95e8071e78240546056',
      city: 'Jakarta',
      minTemp: 0,
      maxTemp: 40,
      searchQuery: ''
    }
  },
  mounted() {
    this.fetchWeather()
  },
  methods: {
    async fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
        )
        this.weatherData = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async searchLocation() {
      if (this.searchQuery.trim() !== '') {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.searchQuery}&units=metric&appid=${this.apiKey}`
          )
          this.weatherData = response.data
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
.weather-widget {
  max-width: 300px;
  margin: 20px auto;
}
</style>
