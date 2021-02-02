import axios from "axios";
import qs from 'qs'
import router from '../router'

const instance = axios.create({
    baseURL: '/api',
})

// 请求拦截器
instance.interceptors.request.use(config => {
    if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
        config.data = qs.stringify(config.data)
    }
    if (config.headers.needToken) {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.authorization = token
        } else {
            throw new Error("请先登陆")
        }
    }
    return config
})

// 响应拦截器
instance.interceptors.response.use(value => value.data, reason => {
    console.log("reason", reason)
    if (!reason.response) {
        alert("请先登陆")
        router.currentRoute.path !== '/login' && router.replace("/login")
    } else {
        // 2. 有token，token过期
        if (reason.response.status === 401) {
            alert('token已过期，请重新登录')
            router.currentRoute.path !== '/login' && router.replace('/login')
        } else if (reason.response.status === 404) {
            // 3. 请求404
            alert('请求资源未找到')
        } else {
            // 4. 其他
            alert('请求失败')
        }
    }
    return new Promise(() => {
    })
})

export default instance
