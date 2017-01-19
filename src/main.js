import 'normalize.css';
import 'assets/styles/base.scss';

import Vue from 'vue';

import App from 'src/App';
import store from 'src/store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  store,
});