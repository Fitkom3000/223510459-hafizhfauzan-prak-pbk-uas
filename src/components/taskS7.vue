<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="text-h6">Tugas Pertemuan 7</div>
        <q-btn
          unelevated
          color="primary"
          @click="openLink('https://223510459-hafizhfauzan-prak-pbk-tugas7.vercel.app/?authuser=0')"
        >
          Open Task
        </q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.q-card {
  max-width: 500px;
  margin: 20px auto;
}
</style>
