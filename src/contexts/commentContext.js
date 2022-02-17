import React, { useState } from "react";
import {createContext} from 'react';
import axios from 'axios';
// import { getCommentsByPost, postComment } from './../utils/api';


const CommentContext = createContext();

export const ArticleProvider =({children})=>{

    const [comments,setComments] = useState([]);
    const [loading,setLoading] = useState(true);


    const setFetchedComments= async() =>{
    const updatedComments = await axios.get("https://ek-reddit.herokuapp.com/api/comments")
    console.log(updatedComments);
  
    } 

    return(
        <CommentContext.Provider 
        value={{comments,loading,setFetchedComments}}>
            {children}
        </CommentContext.Provider>
    )
}

export default CommentContext;
