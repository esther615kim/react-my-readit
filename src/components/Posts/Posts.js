import { Stack, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledDiv } from "./posts.styled";
import {getTopics } from "./../../utils/api";
import PostCard from './PostCard';

const Posts = () => {

  const [topics, setTopics] = useState([]);
  const [selected,setSelected] =useState("all");

  useEffect(() => {
    getTopics()
      .then((res) => {
        setTopics(res);
      })
  }, [topics,selected]);

    const handleCategoryClick=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        setSelected(e.target.innerText.toLowerCase());
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
        <Chip className="chip" label="ALL" onClick={(e)=>{handleCategoryClick(e)}}/>
        {topics?.map((item) => {
            return <Chip 
            className="chip"
            key={item.slug} 
            label={item.slug}
            onClick={(e)=>{handleCategoryClick(e)}}
            />
          })}
      </Stack>
     <PostCard selected={selected}/>
    </StyledDiv>
  );
};

export default Posts;
