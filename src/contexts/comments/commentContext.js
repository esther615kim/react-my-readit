import React, { useState } from "react";
import {createContext} from 'react';
import { getCommentsByPost } from './../utils/api';


const CommentContext = createContext();

export const ArticleProvider =({children})=>{

    const [comments,setComments] = useState([]);
    const [loading,setLoading] = useState(true);


    const setFetchedComments= async() =>{
      const updatedComments = await getCommentsByPost();
      setComments(updatedComments);
      setLoading(pre=>false);
    } 


    return(
        <CommentContext.Provider 
        value={{comments,loading,setFetchedComments}}>
            {children}
        </CommentContext.Provider>
    )
}

export default CommentContext;
