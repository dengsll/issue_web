import axios from 'axios'

//基础url
let base = "http://47.112.11.90/"

const service = axios.create({
    baseURL: base,
    timeout: 100000
})

export default service;

//通用方法
export const POST = (url,article) => {
    return axios.post(`${base}${url}`,article).then(res => res.data)
}
