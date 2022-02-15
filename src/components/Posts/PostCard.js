import { Paper, Stack, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import ArticleContext from "./../../contexts/articleContext";
import { patchVotetoArticle } from "../../utils/api";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { StyledStack } from "./Comments/comments.styled";

const PostCard = ({ selected }) => {
  const { articles, loading, setFetchedData, filterByTopic } =
    useContext(ArticleContext);
  const [likedCount, setLikedCount] = useState();

  useEffect(() => {
    if (selected === "all") {
      setFetchedData();
    } else {
      filterByTopic(selected);
      console.log(selected, articles);
    }

  }, [selected, loading]);


  if (loading) return <h3>loading...</h3>;

  if (!loading)
    return (
      <Grid container justifyContent="center" alignItems="center">
        {articles.map((item) => {
          return (
            <Grid key={item.article_id} item xs={12} sm={5} ml={4}>
              <Paper className="post-box">
                <Link to={`/posts/${item.article_id}`} state={{ from: item }}>
                  <Typography className="h4" variant="subtitle2">{item.title}</Typography>
                  <span>#{item.topic}</span>
                  <p>{item.body}</p>
                </Link>

                  <div style={{display:"flex", flexDirection:"row", fontSize:"0.6rem"}}
                  >
                    <StyledStack direction="row" alignItems="center">
                    <ArrowUpward
                      className="arrow"
                      color="warning"
                      size="small"
                    />
                    <span style={{fontSize:12}}>{item.votes}</span>
                    <ArrowDownward
                      className="arrow"
                      color="primary"
                      size="small"
                    />
                    </StyledStack>

                    <Link
                      to={`/posts/${item.article_id}`}
                      state={{ from: item }}
                    >
                    <Button color="inherit"startIcon={<StickyNote2Icon/>}>{item.comment_count} comments</Button>
                    </Link>

                  </div>

              </Paper>
            </Grid>
          );
        })}
      </Grid>
    );
};

export default PostCard;
