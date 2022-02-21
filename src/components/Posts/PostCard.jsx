import React, { useState } from "react";
import {
  Paper,
  Stack,
  Button,
  Chip,
  Grid,
  Typography,
  LinearProgress,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import { StyledLikedButton } from './posts.styled';
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

const PostCard = ({articles}) => {
  const [page, setPage] = useState(1);

  if (!articles) return <LinearProgress color="inherit" />;

  if(articles) return (
    <>
      {articles
        .slice((page - 1) * 10, (page - 1) * 10 + 10) 
        .map((item) => {
          return (
            <Grid key={item.article_id} item xs={12} sm={5} ml={4}>
              <Paper className="post-box">
                <Link
                  to={`/posts/${item.article_id}`}
                  state={{ from: item }}
                >
                  <Typography className="h4" variant="subtitle2">
                    {item.title}
                  </Typography>
                  <span className="span">#{item.topic}</span>
                  <p className="card-text">{item.body}</p>
                </Link>
                <Stack className="card-stack" 
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link
                    sx={{ textDecoration: "none" }}
                    to={`/posts/${item.article_id}`}
                    state={{ from: item }}
                  >
                    <Button color="inherit" startIcon={<StickyNote2Icon />}>
                      {item.comment_count} comments
                    </Button>
                  </Link>

                  <StyledLikedButton>
                    <LikeButton item={item.article_id}/>{item.votes}
                  </StyledLikedButton>
                </Stack>
              </Paper>
            </Grid>
          );
        })}

      <Pagination
        sx={{ display: "flex", justifyContent: "center", pb: 5 }}
        count={5}
        page={page}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 150);
        }}
      />
    </>
  );
};

export default PostCard;
