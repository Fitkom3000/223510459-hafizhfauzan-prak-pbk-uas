import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Weather from '../components/WeatherWidget.vue'
import taskS1 from '../components/taskS1.vue'
import taskS2 from '../components/taskS2.vue'
import taskS3 from '../components/taskS3.vue'
import taskS4 from '../components/taskS4.vue'
import taskS5 from '../components/taskS5.vue'
import taskS6 from '../components/taskS6.vue'
import taskS7 from '../components/taskS7.vue'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: 'weather', component: Weather },
      { path: 'taskS1', component: taskS1 },
      { path: 'taskS2', component: taskS2 },
      { path: 'taskS3', component: taskS3 },
      { path: 'taskS4', component: taskS4 },
      { path: 'taskS5', component: taskS5 },
      { path: 'taskS6', component: taskS6 },
      { path: 'taskS7', component: taskS7 }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
