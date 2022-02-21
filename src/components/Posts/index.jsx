import React, { useEffect, useContext } from "react";
import ArticleContext from "../../contexts/articleContext";
import PostCard from './PostCard';
import {Grid} from "@mui/material";

const Posts = ({ selected }) => {
  const { articles, loading, setFetchedData,filterByQueries,order,sort_by} =
  useContext(ArticleContext);

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
