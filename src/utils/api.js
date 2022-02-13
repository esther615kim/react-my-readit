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

//404
export const patchVotetoArticle = (article_id,number) =>{
    console.log(article_id,number);
    return dataApi.patch(`/articles/${article_id}`,{"votes":number})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
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


export const patchVotestoComment =(comment_id,vote)=>{
    console.log(comment_id,vote);
    return dataApi.patch(`/comments/${comment_id}`,{"votes":vote})
    .then(({data})=> {
        console.log(data.article.votes);
        return data.article.votes;
    })
}
// 503
export const getSinglePost = (id)=>{
    return dataApi.get(`articles/${id}`)
    .then(({data})=>{
        console.log(data.article);
        return data.article;
    })
}

//users
export const getAllUsers = ()=>{
    return dataApi.get("/users")
    .then(({data})=>{ 
        console.log("all users",data.users);
        return data.users;
    })
}

export const getByUsername = (username)=>{
    return dataApi.get(`users/${username}`)
    .then(({data})=>{
        console.log(data.user);
        return data.user;
    })
}
