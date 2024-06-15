<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="text-h6">Tugas Pertemuan 2</div>
        <q-btn
          unelevated
          color="primary"
          @click="openLink('http://223510459-hafizh-tugas2-prakpbk.vercel.app')"
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
