import React, { useEffect, useState,useContext } from "react";
import { Stack, Chip} from "@mui/material";
import { getTopics } from '../utils/api';
import { StyledDiv } from "../components/Posts/posts.styled";
import Posts from './../components/Posts/index';
import SortBy from '../components/Posts/SortBy';
import ArticleContext from '../contexts/articleContext';

const PostsPage = () => {

  const [topics, setTopics] = useState([]);
  const [selected,setSelected] =useState("all");
  const { order,sort_by} = useContext(ArticleContext);

  useEffect(() => {
    getTopics()
      .then((res) => {
        setTopics(res);
      })
  }, [selected,order,sort_by]);

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
     <Posts selected={selected} order={order} sort_by={sort_by}/>
    </StyledDiv>


  );
};

export default PostsPage;

