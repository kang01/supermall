import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
      timeout: 5000
  })
  // 拦截器
  instance.interceptors.request.use(config => {
    return config
  },err => {

  })
// 3.发送真正的网络请求
  return instance(config)
}