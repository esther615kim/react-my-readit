import { StyledBox } from "../components/Auth/auth.styled";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { Avatar, ButtonGroup, Chip,Button, Container,LinearProgress, Grid } from "@mui/material";
import { getPostsbyUser } from "../utils/api";
import PostCard from "../components/Posts/PostCard";
import { StyledDiv } from "../components/Posts/posts.styled";
import { getAllComments } from "./../utils/api";
import CommentCard from "./../components/Posts/Comments/CommentCard.";
import { StyledCommentDiv } from './../components/Posts/Comments/comments.styled';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [articles, setArticles] = useState();
  const [comments, setComments] = useState();
  const [isArticles, setIsArticles] = useState(true);
  const { loggedin, username, userInfo,setUserLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPostsbyUser(username).then((updatedArticles) =>
      setArticles(updatedArticles)
    );
    getAllComments()
      .then((data) => {
        setComments(data.filter((item) => item.author === username));
      })
      .catch((err) => console.log(err));
  }, [username]);

  const handleClickbtn = (e) => {
    if (e.target.value === "articles") {
      setIsArticles((prev) => true);
    } else {
      setIsArticles((prev) => false);
    }
  };

  const handleClickLogout = ()=>{
    console.log("logout");
    setUserLogout();
    navigate("/");
  }

  if (!userInfo) return <LinearProgress color="inherit" />;

  if (userInfo)
    return (

      <StyledBox>
        <Avatar sx={{ width: 80, height: 80 }} src={userInfo?.avatar_url} />
        <h4>{username}
        <Chip id="date" sx={{ml:1}} label="logout"  clickable onClick={handleClickLogout}/>
        </h4>
        <ButtonGroup
          sx={{ mb: 2 }}
          color="inherit"
          variant="outlined"
          size="small"
        >
          <Button value="articles" onClick={handleClickbtn}>
            Articles
          </Button>
          <Button value="comments" onClick={handleClickbtn}>
            Comments
          </Button>
        </ButtonGroup>

        {isArticles && (
          <StyledDiv>
            <Grid container justifyContent="center" alignItems="center">
              <PostCard articles={articles} />
            </Grid>
          </StyledDiv>
        )}

        {!isArticles && 
        <StyledCommentDiv>
          <Container>
        <CommentCard comments={comments} />
        </Container>
        </StyledCommentDiv>}
      </StyledBox>

    );
};

export default ProfilePage;
