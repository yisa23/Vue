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
