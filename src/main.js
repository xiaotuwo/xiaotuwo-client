import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
import App from './App';

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');