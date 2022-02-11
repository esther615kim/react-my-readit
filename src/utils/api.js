import axios from 'axios';

const dataApi = axios.create({
    baseURL:"https://ek-reddit.herokuapp.com/api"
})

export const getAllPosts = ()=>{
    return dataApi.get("/articles")
    .then(({data})=>{ 
        return data.articles;
    })
}

export const getTopics = ()=>{
    return dataApi.get("/topics")
    .then(({data})=>{ 
        return data.topics;
    })
}

export const getPostsByTopic = (topic)=>{
    return dataApi.get(`/articles?topic=${topic}`)
    .then(({data})=>{ 
        return data.articles;
    })
}

// 503
// export const getSinglePost = (id:number)=>{
//     return dataApi.get(`articles/${id}`)
//     .then(({data})=>{
//         console.log(data.article);
//     })
// }
