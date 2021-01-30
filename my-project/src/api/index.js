import ajax from './ajax'

export const getData = () => ajax({
    url: "/getData",
})
