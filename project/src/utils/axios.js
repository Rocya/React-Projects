import  axios from  'axios'
import Store from '../store/store'
import ActionCreator from '../store/actionCreator'
import qs from 'querystring'
//import  React from  'react'

  // Add a request interceptor
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('请求拦截器',config)
  let data=config.data
  config.data.token=localStorage.getItem('token')||''
  config.data=qs.stringify(data)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

  // Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  //响应拦截器
  console.log('响应拦截器',response)
  if(response.data.err==0||response.data.err==1){
    return response.data;
  }else if(response.data.err==-998){
    console.log('err')
    let action = ActionCreator.changeTokenState(true)
    Store.dispatch(action)
    return Promise.reject(response.data)
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios