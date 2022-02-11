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

// 503
// export const getSinglePost = (id:number)=>{
//     return dataApi.get(`articles/${id}`)
//     .then(({data})=>{
//         console.log(data.article);
//     })
// }
