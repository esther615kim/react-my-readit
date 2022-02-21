import React, { useContext } from "react";
import { Paper, Stack, Avatar, Typography, Container,Chip, IconButton } from "@mui/material";
import { useParams, useLocation,useNavigate,Link } from "react-router-dom";
import { StyledBox } from "./posts.styled";
import { lime } from "@mui/material/colors";
import Comments from "./Comments/index";
import ArticleContext from "../../contexts/articleContext";
import AuthContext from "../../contexts/authContext";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


const SinglePost = () => {
  const { id } = useParams();
  const location = useLocation();
  const { from } = location.state;
  const { username } = useContext(AuthContext);
  const { deleteAPost } = useContext(ArticleContext);
  const navigate = useNavigate();

  const handleClickDelete = (e) => {

    e.preventDefault();
    deleteAPost(id);
    navigate("/");

  };

  return (
    <StyledBox>
      <Link to={`/user/${from.author}`} state={{ from: from.author }}>
        <div className="author-box">
          <Avatar
            className="svg"
            sx={{ bgcolor: lime[200], width: 50, height: 50 }}
          ></Avatar>
          <h5>{from.author}</h5>
        </div>
      </Link>
      <Paper sx={{ minHeight: "80vh", p: 3 }}>
        <Container>
          <h3>
            {from.title}
            {from.author === username && (
              <IconButton onClick={handleClickDelete}>
                <DeleteOutlineIcon className="delete" />
              </IconButton>
            )}
          </h3>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Chip label={from.topic} variant="outlined" color="success"size="small" />
            <Typography variant="button">
              {from.created_at.substr(0, 10)}
            </Typography>
          </Stack>
          <p className="post-text">{from.body}</p>
          <Comments id={id} />
        </Container>
      </Paper>
    </StyledBox>
  );
};

export default SinglePost;
