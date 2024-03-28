import _ from 'lodash';
window._ = _;

import axios from 'axios';

window.axios = axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

if (localStorage.getItem('accessToken') !== undefined && localStorage.getItem('accessToken') !== null) {
  window.axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  window.axios.defaults.headers.Accept = 'application/json';
}