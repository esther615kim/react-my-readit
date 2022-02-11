import { Paper, Stack, Button, Grid } from "@mui/material";
import React, { useEffect, useState, useContext} from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { getAllPosts } from "./../../utils/api";
import ArticleContext from './../../contexts/articleContext';


const PostCard = ({selected}) => {

    const {articles,loading,setFetchedData,filterByTopic} = useContext(ArticleContext);
    useEffect(()=>{

        if(selected==="all"){
            setFetchedData();
        }
        else{
            filterByTopic(selected);
            console.log(selected,articles);
        }

    },[selected,loading]);

  if(loading) return <h3>loading...</h3>;
  if(!loading) return(
    <Grid container justifyContent="center"
    alignItems="center">
    {articles.map((item)=>{
          return <Grid key={item.article_id} item xs={12} sm={5} ml={4}>
          <Paper  className="post-box">
               <Link to={`/posts/${item.article_id}`}>
      <h4>{item.title}</h4>
      <span>#{item.topic}</span>
      <p>
          {item.body}</p>
    </Link>
    <Stack
      className="stack"
      pb={1}
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Button startIcon={<FavoriteBorderIcon />}>
        {item.votes} liked
      </Button>
      <Button startIcon={<MessageIcon />}>
        {item.comment} comments
      </Button>
    </Stack>
          </Paper>
          </Grid> 
      })}
       </Grid>  
  )

//   if(!loading) return <>{articles.map((item) =>{
//     <Paper key={item.article_id} className="post-box">
//     <Link to={`/posts/${item.article_id}`}>
//       <Chip variant="outlined" label={item.topic}/>
//       <h4>{item.title}</h4>
//       <p>{item.body}</p>
//     </Link>
//     <Stack
//       className="stack"
//       pb={1}
//       direction="row"
//       justifyContent="space-evenly"
//       alignItems="center"
//     >
//       <Button startIcon={<FavoriteBorderIcon />}>
//         {item.votes} liked
//       </Button>
//       <Button startIcon={<MessageIcon />}>
//         {item.comment} comments
//       </Button>
//     </Stack>
//   </Paper>
//   })}</>
};

export default PostCard;
