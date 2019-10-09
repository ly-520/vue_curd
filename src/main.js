// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

var axios = require('axios')
axios.defaults.baseURL='http://localhost:8081/api'

Vue.prototype.$axios=axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
 // el: '#app',
  router,
//  components: { App },
  template: `
      <div id="app">
          <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">用户管理系统</a>
              </div>
              <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <li><router-link to="/">主页</router-link></li>
                  <li><router-link to="/about">关于我们</router-link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li><router-link to="/add">添加成员</router-link></li>
                </ul>
              </div><!--/.nav-collapse -->
            </div>
          </nav>
          <div style="margin-top: 60px;">
            <router-view/>
          </div>
      </div>
  `
}).$mount("#app")
