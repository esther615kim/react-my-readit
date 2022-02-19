import React, { useState } from "react";
import {createContext} from 'react';
import axios from 'axios';
import { getAllComments,patchVotestoComment, dataApi,getCommentsByPost } from './../utils/api';


const CommentContext = createContext();

export const CommentProvider =({children})=>{

    const [comments,setComments] = useState([]);
    const [articleComments,setArticleComments] = useState([]);
    const [loading,setLoading] = useState(true);

    const setFetchedComments= async() =>{ // ALL comments

    // get all comments
    const updatedComments = await getAllComments();
    setComments(updatedComments);
    console.log("updated comments", comments);
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
    const updateCommentVotes = async(id,vote) =>{ // comment_id
        console.log("comment_id",id)
        const res = await patchVotestoComment(id,vote);

        const updatedComments = await setFetchedComments(); // ALL comments
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
