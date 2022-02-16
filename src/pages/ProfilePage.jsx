import { StyledBox } from "../components/Auth/auth.styled";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { Avatar, ButtonGroup, Button } from "@mui/material";
import { LinearProgress, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getPostsbyUser } from "../utils/api";
import PostCard from "../components/Posts/PostCard";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const [articles, setArticles] = useState();
  const { loggedin, username } = useContext(AuthContext);

  const location = useLocation();
  const { from } = location.state; // how can I make it optional?

  useEffect(() => {
    from
      ? getPostsbyUser(from)
      : getPostsbyUser(username).then((updatedArticles) =>
          setArticles(updatedArticles)
        );
  }, [username, from]);

  articles && console.log(articles);

  if (!articles) return <LinearProgress color="inherit" />;

  if (articles)
    return (
      <StyledBox>
        {/* <Avatar sx={{width:100,height:100}}/> */}
        <h3>{from? from : username}</h3>
        <ButtonGroup color="secondary" variant="outlined">
          <Button>Articles</Button>
          <Button>Comments</Button>
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

export default ProfilePage;
