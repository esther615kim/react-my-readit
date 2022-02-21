
import { useContext, useEffect, useState } from "react";
import { Avatar, Chip,ButtonGroup, Button, Container,LinearProgress, Grid } from "@mui/material";
import { useLocation,useNavigate  } from 'react-router-dom';

import { StyledBox } from "../styles/auth.styled";
import { StyledCommentDiv } from './../components/Posts/Comments/comments.styled';
import { StyledDiv } from "../components/Posts/posts.styled";
import PostCard from "../components/Posts/PostCard";
import CommentCard from "./../components/Posts/Comments/CommentCard.";

import { getAllComments,getPostsbyUser} from "./../utils/api";
import AuthContext from "../contexts/authContext";

const UserPage = () => {
  const [articles, setArticles] = useState();
  const [comments, setComments] = useState();
  const [isArticles, setIsArticles] = useState(true);

  const {username,setUserLogout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state;

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
    setUserLogout();
    navigate("/");
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
