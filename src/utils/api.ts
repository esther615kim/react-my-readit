import axios from 'axios';

const dataApi = axios.create({
    baseURL:"https://ek-reddit.herokuapp.com/api"
})

export const getAllPosts = ()=>{
    return dataApi.get("/articles")
    .then(({data})=>{
        console.log(data.article);
    })
}


// 503
export const getSinglePost = (id:number)=>{
    return dataApi.get(`articles/${id}`)
    .then(({data})=>{
        console.log(data.article);
    })
}

getSinglePost(3);