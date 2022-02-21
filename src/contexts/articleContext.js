import React, { useState } from "react";
import {createContext} from 'react';
import { getAllPosts, getPostsByTopic, deletePost, patchVotetoArticle } from './../utils/api';


const ArticleContext = createContext();

export const ArticleProvider =({children})=>{

    const [articles, setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    const [order,setOrder] = useState("desc");
    const [sort_by,setSort_by] =useState("created_at");


    const setFetchedData = async() =>{
      const updatedArticles = await getAllPosts(sort_by,order);
      setArticles(updatedArticles);
      setLoading(pre=>false);
    } 

    const filterByQueries = async(sort_by,order,topic) =>{
      const updatedArticles = await getPostsByTopic(sort_by,order,topic);
      setArticles(updatedArticles);
      setLoading(pre=>false);
    } 

    const deleteAPost = async(id) =>{
      const deleteRequest = await deletePost(id);
      const updatedArticles = await setFetchedData();
      return updatedArticles;
    }

    const updateVotes = async(id,vote) =>{
      const res = await patchVotetoArticle(id,vote);

      const updatedArticles = await setFetchedData();
      return updatedArticles;
    }

    return(
        <ArticleContext.Provider 
        value={{articles,loading,setFetchedData,setSort_by,setOrder,filterByQueries,order,sort_by,deleteAPost,updateVotes}}>
            {children}
        </ArticleContext.Provider>
    )
}

export default ArticleContext;

