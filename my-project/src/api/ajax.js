import axios from "axios";
import qs from 'qs'

const instance = axios.create({
    baseURL: '/api',
})

// 请求拦截器
instance.interceptors.request.use(config => {
    if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
        config.data = qs.stringify(config.data)
    }
    return config
})

// 响应拦截器
instance.interceptors.response.use(value => value.data, reason => {
    console.log("reason", reason)
    return new Promise(() => {
    })
})

export default instance
