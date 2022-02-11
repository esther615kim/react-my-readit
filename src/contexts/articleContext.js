import React, { useState, useEffect } from "react";
import {createContext, useContext} from 'react';
import { getAllPosts, getTopics } from './../utils/api';



const Article = createContext();

const ArticleContext =({children})=>{
    const [articles, setArticles] = useState([]);
    const [topics,setTopics] = useState([]);

    useEffect(()=>{
      getAllPosts()
         .then((res)=>{
               setArticles(res);
               getTopics();
         })
         .then((res)=>{
           setTopics(res);
         })
    },[])

    return(
        <Article.Provider value={{articles,topics}}>
            {children}
        </Article.Provider>
    )
}

export default ArticleContext ;

export const ArticleProvider =()=>{
    return useContext(Article);
}
