import { Paper, Stack, Button, Grid } from "@mui/material";
import React, { useEffect, useContext,useState} from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import ArticleContext from "./../../contexts/articleContext";
import { patchVotetoArticle } from '../../utils/api';

const PostCard = ({ selected }) => {
  const { articles, loading, setFetchedData, filterByTopic } = useContext(ArticleContext);
  const [likedCount, setLikedCount] = useState()

  useEffect(() => {
    if (selected === "all") {
      setFetchedData();
    } else {
      filterByTopic(selected);
      console.log(selected, articles);
    }
  }, [selected, loading]);


  const handleIncVote = async(id,votes)=>{
    const inc_vote =1;
    const dec_vote =-1;
    console.log("현제보트",votes);
    // try{

    //     setLikedCount(prev=> prev+1);
    //     const res = await patchVotetoArticle(id,inc_vote);
    //   }catch(err){
    //   console.log(err)};
  }

  if (loading) return <h3>loading...</h3>;

  if (!loading)
    return (
      <Grid container justifyContent="center" alignItems="center">
        {articles.map((item) => {
          return (
            <Grid key={item.article_id} item xs={12} sm={5} ml={4}>
              <Paper className="post-box">
                <Link to={`/posts/${item.article_id}`} state={{ from: item }}>
                  <h4>{item.title}</h4>
                  <span>#{item.topic}</span>
                  <p>{item.body}</p>
                </Link>

                <Stack
                  className="stack"
                  pb={1}
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Link to={`/posts/${item.article_id}`} state={{ from: item }}>
                    <Button startIcon={<MessageIcon />}>
                      {item.comment} comments
                    </Button>
                  </Link>

                  {/* LIKE BUTTON */}
                  <Button className="liked"

                  startIcon={<FavoriteBorderIcon
                  onClick={
                      ()=>{
                        handleIncVote(item.article_id,item.votes)
                      }
                  }/>}>
                    {item.votes}
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    );
};

export default PostCard;
