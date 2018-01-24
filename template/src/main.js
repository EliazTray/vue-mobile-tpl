{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

{{#isInRice}}
import wxSign from './util/wx_sign'
{{/isInRice}}

import base from './config'
// 注入vue的原型链
import axios from './util/axios'

// 引入Rem
import Rem from './util/rem'
Rem(document, window)

Object.defineProperty(Vue.prototype, '$$axios', { value: axios })

Vue.config.productionTip = false

{{#isInRice}}
// 确认是否登录过
window.$http_able = false
router.beforeEach((to, from, next) => {
  // 添加不需要微信登陆的路由模块
  if (window.$http_able) {
    next()
  } else {
    axios.get(base.checkLoginPath, {headers: { 'page-url': location.href }})
    .then(res => {
      window.$http_able = true
      next()
    })
  }
  next()
})
{{/isInRice}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#isInRice}},
  created () {
    const url = encodeURIComponent(location.href.split('#')[0])
    wxSign(url)
  }
  {{/isInRice}}
  {{/if_eq}}
})
