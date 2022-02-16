import { Stack, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTopics } from '../utils/api';
import PostCard from '../components/Posts/PostCard';
import SortBy from '../components/Posts/SortBy';
import { StyledDiv } from "../components/Posts/posts.styled";



const PostPage = () => {

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

      {/* CATEGORIES */}
      <div>
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
           <SortBy/>
      </Stack>
      </div>
      {/* POSTS */}
     <PostCard selected={selected}/>
    </StyledDiv>
  );
};

export default PostPage;

