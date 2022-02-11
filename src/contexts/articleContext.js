import React, { useState, useEffect } from "react";
import {createContext, useContext} from 'react';
import { getAllPosts, getTopics } from './../utils/api';


const ArticleContext = createContext();

export const ArticleProvider =({children})=>{

    const [articles, setArticles] = useState([]);
    const [loading,setLoading] = useState(true);

    const setFetchedData = async() =>{
      const updatedArticles = await getAllPosts();
      setArticles(updatedArticles);
      setLoading(pre=>false);
    } 


    return(
        <ArticleContext.Provider value={{articles,loading,setFetchedData}}>
            {children}
        </ArticleContext.Provider>
    )
}

export default ArticleContext;

