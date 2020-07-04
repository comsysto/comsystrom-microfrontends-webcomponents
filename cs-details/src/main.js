import Vue from 'vue'
import App from './App.vue'
import vueCustomElement from "vue-custom-element"

Vue.use(vueCustomElement);
const channel = new BroadcastChannel("comsystrom");
channel.onmessage = (msg) => console.log(msg);

Vue.customElement('cs-details', App, {
  shadow: true,
  disconnectedCallback() {
    new Vue({
      render: h => h(App),
    }).$mount(this)
  }
})

Vue.config.productionTip = false