import React, { useState } from "react";
import {createContext} from 'react';
import axios from 'axios';
import { getAllComments,patchVotestoComment, getCommentsByPost } from './../utils/api';


const CommentContext = createContext();

export const CommentProvider =({children})=>{

    const [comments,setComments] = useState([]);
    const [articleComments,setArticleComments] = useState([]);
    const [loading,setLoading] = useState(true);

    const setFetchedComments= async() =>{ 

    // get all comments
    const updatedComments = await getAllComments();
    setComments(updatedComments);
    setLoading(pre=>false);
    } 

    // get cooments by article id
    const updateCommentsByArticle = async(id)=>{
        getCommentsByPost(id).then((updated) => {
            setArticleComments(updated);
            setLoading(pre=>false);
    })
}
    // update votes
    const updateCommentVotes = async(article_id,id,vote) =>{ 
        const res = await patchVotestoComment(id,vote);
        const updatedComments = await updateCommentsByArticle(article_id); 
        return updatedComments;
      }

    return(
        <CommentContext.Provider 
        value={{comments,loading,setFetchedComments,articleComments,updateCommentsByArticle,updateCommentVotes}}>
            {children}
        </CommentContext.Provider>
    )
}

export default CommentContext;
