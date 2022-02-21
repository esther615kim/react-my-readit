import React, { useEffect, useContext } from "react";
import {Grid} from "@mui/material";
import PostCard from './PostCard';
import ArticleContext from "../../contexts/articleContext";



const Posts = ({ selected,order,sort_by}) => {
  const { articles, loading, setFetchedData,filterByQueries} = useContext(ArticleContext);

  useEffect(() => {
    if (selected === "all") {
      setFetchedData();
      
    } else {
      filterByQueries(sort_by,order,selected);
    }

  }, [selected,order,loading,sort_by]);


  if (loading) return <h3>loading...</h3>;

  if (!loading)
    return (
      <Grid container justifyContent="center" alignItems="center">
        <PostCard articles={articles}/>
        
      </Grid>
    );
};

export default Posts;
