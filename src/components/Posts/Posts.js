import { Stack, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledDiv } from "./posts.styled";
import {getTopics } from "./../../utils/api";
import PostCard from './PostCard';

const Posts = () => {

  const [topics, setTopics] = useState([]);
  const [selected,setSelected] =useState('');

  useEffect(() => {
    getTopics()
      .then((res) => {
        setTopics(res);
      })
  }, [topics]);

    const handleCategoryClick=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        setSelected(e.target.innerText);
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
        {topics?.map((item) => {
            return <Chip 
            key={item.slug} 
            label={item.slug}
            // onClick={(e)=>{handleCategoryClick(e)}}
            />
          })}
      </Stack>
     <PostCard />
    </StyledDiv>
  );
};

export default Posts;
