import { Stack, Chip } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { StyledDiv } from "./posts.styled";
import { getAllPosts, getTopics } from "./../../utils/api";
import ArticleContext from "./../../contexts/articleContext";
import PostCard from './PostCard';

const Posts = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selected,setSelected] =useState('');

  useEffect(() => {
    getAllPosts()
    .then((res)=>{
      setArticles(res);
      getTopics();
    })
      .then((res) => {
        return setTopics(res);
      })
  }, []);

    const handleCategoryClick=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        setSelected(e.target.value);
        console.log(selected);
    }

  return (
    <StyledDiv>
      <Stack
        m={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {topics &&
          topics.map((item) => {
            return <Chip 
            key={item.slug} 
            label={item.slug}
            onClick={(e)=>{handleCategoryClick(e)}}
            />
          })}
      </Stack>
     <PostCard 
     articles={articles}
     selectedTopic={selected}/>
    </StyledDiv>
  );
};

export default Posts;
