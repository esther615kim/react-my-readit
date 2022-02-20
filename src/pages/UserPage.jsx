import { StyledBox } from "../components/Auth/auth.styled";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { Avatar, Chip,ButtonGroup, Button, Container,LinearProgress, Grid } from "@mui/material";
import { getPostsbyUser } from "../utils/api";
import PostCard from "../components/Posts/PostCard";
import { StyledDiv } from "../components/Posts/posts.styled";
import { getAllComments } from "./../utils/api";
import CommentCard from "./../components/Posts/Comments/CommentCard.";
import { StyledCommentDiv } from './../components/Posts/Comments/comments.styled';
import { useLocation } from 'react-router-dom';


const UserPage = () => {
  const [articles, setArticles] = useState();
  const location = useLocation();
  const { from } = location.state;
  const [comments, setComments] = useState();
  const [isArticles, setIsArticles] = useState(true);

  const {username} = useContext(AuthContext);

  useEffect(() => {

       getPostsbyUser(from).then((updatedArticles) =>
          setArticles(updatedArticles)
        );
        getAllComments()
        .then((data) => {
          setComments(data.filter((item) => item.author === from));
        })
        .catch((err) => console.log(err));

  }, [from]);

const handleClickbtn = (e) => {
    if (e.target.value === "articles") {
      setIsArticles((prev) => true);
    } else {
      setIsArticles((prev) => false);
    }
  };

  const handleClickLogout = ()=>{
    console.log("logout");
  }

  if (!articles) return <LinearProgress color="inherit" />;

  if (articles)
    return (
      <StyledBox>

      <Avatar sx={{ width: 80, height: 80 }}/>
      <h4>{from}
      {username===from &&<Chip id="date" sx={{ml:1}} label="logout"  clickable onClick={handleClickLogout}/>}
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

export default UserPage;
