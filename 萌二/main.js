import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store = store

import trendScrollView from './pages/components/trendScrollView.vue'
Vue.component('trendScrollView',trendScrollView)

import hot from './pages/components/hot.vue'
Vue.component('hot',hot)

import hotNewCard from './pages/components/hotNewCard.vue'
Vue.component('hotNewCard',hotNewCard)

import recommedSwiper from './pages/components/recommedSwiper.vue'
Vue.component('recSwiper',recommedSwiper)

import hotVideo from './pages/components/hotVideo.vue'
Vue.component('hotVideo',hotVideo)

import searchResult from './pages/index/searchResult.vue'
Vue.component('searchResult',searchResult)

import tag from './pages/components/Tag.vue'
Vue.component('Tag',tag)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
