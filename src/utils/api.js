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

export const getPostsbyUser = (user)=>{
    return dataApi.get("/articles")
    .then(({data})=>{ 
        return data.articles;
    }).then((res)=>{
        const result = res.filter((item)=> item.author ===user);
        console.log(user,"byUser",result);
        return result;
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

// 503
export const getSinglePost = (id)=>{
    return dataApi.get(`articles/${id}`)
    .then(({data})=>{
        console.log(data.article);
        return data.article;
    })
}

// comments 
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

export const postComment = (article_id, author, body) => {

    const commentObj = { author, body };
    console.log("sending",commentObj);

    return dataApi.post(`/articles/${article_id}/comments`, commentObj)
                    .then(({data}) => {
                        console.log(data.comment);
                        return(data.comment);
                    })

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
        console.log(data.users);
        return data.users;
    })
}
