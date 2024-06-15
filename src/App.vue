<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer"></q-btn>
        <q-toolbar-title>UAS Prak PBK</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Drawer yang ditekan -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered overlay>
      <q-list>
        <q-item clickable v-ripple to="/weather">
          <q-item-section avatar>
            <q-icon name="wb_sunny" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Weather</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item icon="assignment" label="Tasks" expand-separator default-opened>
          <q-list>
            <q-item clickable v-ripple to="/taskS1">
              <q-item-section>
                <q-item-label>Task 1</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/taskS2">
              <q-item-section>
                <q-item-label>Task 2</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/taskS3">
              <q-item-section>
                <q-item-label>Task 3</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/taskS4">
              <q-item-section>
                <q-item-label>Task 4</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/taskS5">
              <q-item-section>
                <q-item-label>Task 5</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/taskS6">
              <q-item-section>
                <q-item-label>Task 6</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/taskS7">
              <q-item-section>
                <q-item-label>Task 7</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>

<style>
.q-toolbar-title {
  font-size: 1.2rem;
}
</style>
