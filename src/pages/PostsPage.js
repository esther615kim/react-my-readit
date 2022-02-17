import { Stack, Chip, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getTopics } from '../utils/api';
import SortBy from '../components/Posts/SortBy';
import { StyledDiv } from "../components/Posts/posts.styled";
import Posts from './../components/Posts/index';



const PostsPage = () => {

  const [topics, setTopics] = useState([]);
  const [selected,setSelected] =useState("all");

  useEffect(() => {
    getTopics()
      .then((res) => {
        setTopics(res);
      })
  }, [selected]);

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
     <Posts selected={selected}/>
    </StyledDiv>


  );
};

export default PostsPage;

