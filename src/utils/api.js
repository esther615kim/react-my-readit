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

export const getCommentsByPost = (id)=>{
    return dataApi.get("/comments")
    .then(({data})=>{ 
        return data?.comments.filter((item)=> item.article_id === parseInt(id))
    })
}

//404
export const patchVotetoArticle = (article_id,number) =>{
    console.log(article_id,number);
    return dataApi.patch(`/article/${article_id}`,{inc_vote:number})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}


export const patchVotestoComment =(comment_id,vote)=>{
    console.log(comment_id,vote);
    
}
// 503
// export const getSinglePost = (id:number)=>{
//     return dataApi.get(`articles/${id}`)
//     .then(({data})=>{
//         console.log(data.article);
//     })
// }
