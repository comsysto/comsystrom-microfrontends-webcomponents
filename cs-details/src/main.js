import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from "vue-custom-element"

Vue.use(vueCustomElement);

Vue.customElement('cs-details', App, {
  shadow: true,
  disconnectedCallback() {
    new Vue({
      render: h => h(App),
    }).$mount(this)
  }
})

Vue.config.productionTip = false