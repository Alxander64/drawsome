import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueKonva from 'vue-konva';
import VueCookies from 'vue-cookies';
import App from './App';
import router from './router';

require('./assets/favicon.ico');

Vue.config.productionTip = false;
Vue.use(VueKonva);
Vue.use(VueCookies);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
