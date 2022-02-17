import { StyledBox } from "../components/Auth/auth.styled";
import { useEffect, useState } from "react";
import { Avatar, ButtonGroup, Button } from "@mui/material";
import { LinearProgress, Grid } from "@mui/material";
import { getPostsbyUser } from "../utils/api";
import PostCard from "../components/Posts/PostCard";
import { useLocation } from 'react-router-dom';

const UserPage = () => {
  const [articles, setArticles] = useState();

  const location = useLocation();
  const { from } = location.state;

  useEffect(() => {

       getPostsbyUser(from).then((updatedArticles) =>
          setArticles(updatedArticles)
        );
  }, [from]);


  if (!articles) return <LinearProgress color="inherit" />;

  if (articles)
    return (
      <StyledBox>
        <Avatar sx={{width:100,height:100}}/>
        <h3>{from}</h3>
        <ButtonGroup color="secondary" variant="outlined">
          <Button>Articles</Button>
          <Button disabled>Comments</Button>
        </ButtonGroup>

        <Grid
          mt={2}
          pr={2}
          container
          justifyContent="center"
          alignItems="center"
        >
          <PostCard articles={articles} />
        </Grid>
      </StyledBox>
    );
};

export default UserPage;
