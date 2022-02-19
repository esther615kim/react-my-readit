import React, { useState } from "react";
import {createContext} from 'react';
import axios from 'axios';
import { getAllComments,patchVotestoComment, dataApi } from './../utils/api';


const CommentContext = createContext();

export const ArticleProvider =({children})=>{

    const [comments,setComments] = useState([]);
    const [loading,setLoading] = useState(true);


    const setFetchedComments= async() =>{ // ALL comments

    const updatedComments = await getAllComments();

    setComments(updatedComments);
    console.log("updated comments", comments);
    setLoading(pre=>false);
    } 

    const updateCommentVotes = async(id,vote) =>{ // comment_id
        console.log("comment_id",id)
        const res = await patchVotestoComment(id,vote);
  
        const updatedArticles = await setFetchedComments(); // ALL comments
        return updatedArticles;
      }

    return(
        <CommentContext.Provider 
        value={{comments,loading,setFetchedComments,updateCommentVotes}}>
            {children}
        </CommentContext.Provider>
    )
}

export default CommentContext;
