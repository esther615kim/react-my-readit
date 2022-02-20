import React, { useState } from "react";
import {createContext} from 'react';
import { getAllPosts, getPostsByTopic, deletePost, patchVotetoArticle } from './../utils/api';


const ArticleContext = createContext();

export const ArticleProvider =({children})=>{

    const [articles, setArticles] = useState([]);
    const [loading,setLoading] = useState(true);


    const setFetchedData = async() =>{
      const updatedArticles = await getAllPosts();
      setArticles(updatedArticles);
      console.log("아티클세팅",setArticles);
      setLoading(pre=>false);
    } 

    const filterByTopic = async(topic) =>{
      const updatedByTopic = await getPostsByTopic(topic);
      setArticles(updatedByTopic); // better to seperate it?
      setLoading(pre=>false);
    } 

    const deleteAPost = async(id) =>{
      const deleteRequest = await deletePost(id); // working properly?
      console.log("article to delete", id)
      const updatedArticles = await setFetchedData();
      console.log("업데이트",articles)
      return updatedArticles;
    }

    const updateVotes = async(id,vote) =>{
      console.log("id",id)
      const res = await patchVotetoArticle(id,vote);

      const updatedArticles = await setFetchedData();
      return updatedArticles;
    }

    return(
        <ArticleContext.Provider 
        value={{articles,loading,setFetchedData,filterByTopic,deleteAPost,updateVotes}}>
            {children}
        </ArticleContext.Provider>
    )
}

export default ArticleContext;

