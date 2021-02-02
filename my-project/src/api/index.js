import ajax from './ajax'

export const getData = () => ajax({
    url: "/getData",
})

export const login = (email, password) => ajax({
    url: '/login',
    data: {
        email,
        password
    },
    method: 'post'
})

export const autologin = () => ajax({
    url: '/autologin',
    headers: {
        needToken: true
    }
})
