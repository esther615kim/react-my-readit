import axios from 'axios';

export const dataApi = axios.create({
    baseURL:"http://localhost:8080/api"
    // baseURL:"https://ek-reddit.herokuapp.com/api"
})


export const getTopics = ()=>{
    return dataApi.get("/topics")
    .then(({data})=>{ 
        return data.topics;
    })
}

// posts

export const getAllPosts = ()=>{
    return dataApi.get("/articles")
    .then(({data})=>{ 
        return data.articles;
    })
}

export const getPostsbyUser = (user)=>{
    return dataApi.get("/articles")
    .then(({data})=>{ 
        return data.articles;
    }).then((res)=>{
        const result = res.filter((item)=> item.author ===user);
        return result;
    })
}

//404
export const patchVotetoArticle = (article_id,number=1) =>{

    return dataApi.patch(`/articles/${article_id}`,{"votes":number})
    .catch((err)=>console.log(err));
}


export const getPostsByTopic = (topic)=>{
    return dataApi.get(`/articles?topic=${topic}`)
    .then(({data})=>{ 
        return data.articles;
    })
}

// 503
export const getSinglePost = (id)=>{
    return dataApi.get(`articles/${id}`)
    .then(({data})=>{
        return data.article;
    })
}

export const deletePost = (id)=>{

    return dataApi.get("/articles")
    .then(({data})=>{ 

        if(data.articles.filter((item)=> item.article_id === parseInt(id))){
            return dataApi.delete(`articles/${id}`);
        }else{
            return;
        }
    }).catch((err)=>console.log(err));
}

// comments 
export const getAllComments = ()=>{
    return dataApi.get("/comments")
    .then(({data})=>{ 
        return data.comments;
    })
}
export const getCommentsByPost = (id)=>{
    return dataApi.get("/comments")
    .then(({data})=>{ 
        return data?.comments.filter((item)=> item.article_id === parseInt(id))
    })
}

export const getCommentsByVotes = (id)=>{
    return dataApi.get("/comments?sort_by=votes")
    .then(({data})=>{ 
        return data?.comments.filter((item)=> item.article_id === parseInt(id))
    })
}

export const patchVotestoComment =(comment_id,number=1)=>{
    return dataApi.patch(`/comments/${comment_id}`,{"votes":number})
    .catch((err)=>console.log(err));
}

export const postComment = (article_id, author, body) => {

    const commentObj = { author, body };

    return dataApi.post(`/articles/${article_id}/comments`, commentObj)
                    .then(({data}) => {
                        return(data.comment);
                    })
}

export const deleteComment =(id) =>{
    return dataApi.get("/comments")
    .then(({data})=>{ 

        if(data.comments.filter((item)=> item.comment_id === parseInt(id))){
            return dataApi.delete(`comments/${id}`);
        }else{
            return;
        }
    }).catch((err)=>console.log(err));
}

//users
export const getAllUsers = ()=>{
    return dataApi.get("/users")
    .then(({data})=>{ 
        return data.users;
    })
}

export const getByUsername = (username)=>{
    return dataApi.get(`users/${username}`)
    .then(({data})=>{
        return data.user;
    })
}
