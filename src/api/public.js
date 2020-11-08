import request from "./request"

export const Particle = (article) => {
    return request({
        url:"/article/publish",
        method: "post",
        data: article
    })
}