import React, { useState } from "react";
import {
  Paper,
  Stack,
  Button,
  Grid,
  Typography,
  Pagination,
} from "@mui/material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { StyledStack } from "./Comments/comments.styled";

const PostCard = ({ articles }) => {

  



  const [page, setPage] = useState(1);
  return (
    <>
      {articles
        .slice((page - 1) * 10, (page - 1) * 10 + 10) // 10 per page
        .map((item) => {
          return (
            <Grid key={item.article_id} item xs={12} sm={5} ml={4}>
              <Paper className="post-box">
                <Link
                  to={`/posts/${item.article_id}`}
                  state={{ from: item }}
                  style={{ textDecoration: "none" }}
                >
                  <Typography className="h4" variant="subtitle2">
                    {item.title}
                  </Typography>
                  <span>#{item.topic}</span>
                  <p>{item.body}</p>
                </Link>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "0.6rem",
                  }}
                >
                  <StyledStack direction="row" alignItems="center">
                    <ArrowUpward
                      className="arrow"
                      color="warning"
                      size="small"
                    />
                    <span style={{ fontSize: 12 }}>{item.votes}</span>
                    <ArrowDownward
                      className="arrow"
                      color="primary"
                      size="small"
                    />
                  </StyledStack>

                  <Link
                    sx={{ textDecoration: "none" }}
                    to={`/posts/${item.article_id}`}
                    state={{ from: item }}
                  >
                    <Button color="inherit" startIcon={<StickyNote2Icon />}>
                      {item.comment_count} comments
                    </Button>
                  </Link>
                </div>
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
