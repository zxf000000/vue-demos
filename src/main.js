import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {
  SharedElementRouteGuard,
  SharedElementDirective,
  // eslint-disable-next-line no-unused-vars
  createSharedElementDirective
} from 'v-shared-element'

import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(SharedElementDirective);
router.beforeEach(SharedElementRouteGuard)

// 自定义指令
Vue.directive('test1', {
  inserted(el, binding,node) {
    console.log(el, binding, node);
    el.innerHTML = `<p>value: ${binding.value}</p></br>
        <p>modifiers: ${JSON.stringify(binding.modifiers)}</p></br>
        <p>arg: ${binding.arg}</p>
`
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
