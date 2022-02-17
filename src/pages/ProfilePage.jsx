import { StyledBox } from "../components/Auth/auth.styled";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { Avatar, ButtonGroup, Button } from "@mui/material";
import { LinearProgress, Grid } from "@mui/material";
import { getPostsbyUser } from "../utils/api";
import PostCard from "../components/Posts/PostCard";

const ProfilePage = () => {
  const [articles, setArticles] = useState();
  const { loggedin, username } = useContext(AuthContext);


  useEffect(() => {

       getPostsbyUser(username).then((updatedArticles) =>
          setArticles(updatedArticles)
        );
  }, [username]);


  if (!articles) return <LinearProgress color="inherit" />;

  if (articles)
    return (
      <StyledBox>
        <Avatar sx={{width:100,height:100}}/>
        <h3>{username}</h3>
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

export default ProfilePage;
