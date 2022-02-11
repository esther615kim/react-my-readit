import { Paper, Stack, Button, Chip } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { getAllPosts, getTopics } from "./../../utils/api";
import ArticleContext from './../../contexts/articleContext';


const PostCard = () => {
    const [cards,setCards] = useState([]);
    const {articles,loading,setFetchedData} = useContext(ArticleContext);
    useEffect(()=>{

        setFetchedData();
        console.log("아티클",articles.length);
        console.log(loading);
        // if(selected){
        //     console.log(selected);
        //     // const updatedCards = articles.filter(item => item.topic === selected);
        //     // setCards(updatedCards);
        // }else{
        //     setCards(articles);
        // }
    },[loading]);

  if(loading) return <h3>loading...</h3>;
  if(!loading) return(
      <>{articles.map((item)=>{
          return <Paper key={item.article_id} className="post-box">
               <Link to={`/posts/${item.article_id}`}>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
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
      })}
        </>
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
