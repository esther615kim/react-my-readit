import React, { useState, ReactNode,useEffect } from "react";
import {createContext, useContext} from 'react';
import axios from 'axios';
import { getAllPosts } from './../utils/api';



const Article = createContext();

const ArticleContext =({children})=>{
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
      getAllPosts()
         .then((res)=>{
            console.log(res); // fetched data
               setArticles(res);
         })
    },[])

    return(
        <Article.Provider value={{articles}}>
            {children}
        </Article.Provider>
    )
}

export default ArticleContext ;

export const ArticleState =()=>{
    return useContext(Article);
}
