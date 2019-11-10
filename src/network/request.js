import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/v1',
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