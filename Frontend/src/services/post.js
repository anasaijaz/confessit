import service from '../config/service'

export function post({post}){
    const token = JSON.parse(localStorage.getItem(process.env["REACT_APP_JWT_HASH"]))

    return service.post("/post", {post},
        {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        })
}

export function index(){
    const token = JSON.parse(localStorage.getItem(process.env["REACT_APP_JWT_HASH"]))

    return service.get("/post", {
        headers: {
            Authorization: `Bearer ${token.token}`
        }
    })
}

export function get({id}){
    const token = JSON.parse(localStorage.getItem(process.env["REACT_APP_JWT_HASH"]))

    return service.get(`/post/${id}`, {
        headers: {
            Authorization: `Bearer ${token.token}`
        }
    })
}

export function postReaction({id, reaction}){
    const token = JSON.parse(localStorage.getItem(process.env["REACT_APP_JWT_HASH"]))

    return service.post(`/post/${id}/react`, undefined,{
        headers: {
            Authorization: `Bearer ${token.token}`,
        },
        params: {
            reaction
        }
    })
}


export function postComment({id, comment}){
    const token = JSON.parse(localStorage.getItem(process.env["REACT_APP_JWT_HASH"]))

    return service.post(`/post/${id}/comment`, {comment},{
        headers: {
            Authorization: `Bearer ${token.token}`,
        }
    })
}

export function postReply({id,comment_id ,comment}){
    const token = JSON.parse(localStorage.getItem(process.env["REACT_APP_JWT_HASH"]))

    return service.post(`/post/${id}/comment/${comment_id}`, {comment},{
        headers: {
            Authorization: `Bearer ${token.token}`
        }
    })
}
