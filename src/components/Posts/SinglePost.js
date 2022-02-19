import { Paper, Stack, Avatar, Typography, Container } from "@mui/material";
import React, { useContext } from "react";
import { StyledBox } from "./posts.styled";
import { useParams, useLocation,useNavigate } from "react-router-dom";
import { Chip, IconButton } from "@mui/material/";
import { lime } from "@mui/material/colors";
import Comments from "./Comments/index";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArticleContext from "../../contexts/articleContext";

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
      <Link to={"/user"} state={{ from: from.author }}>
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
            justifyContent="space-around"
            alignItems="center"
          >
            <Chip label={from.topic} variant="outlined" size="small" />
            <Typography variant="button">
              {from.created_at.substr(0, 10)}
            </Typography>
          </Stack>

          <p>{from.body}</p>

          {/* COMMENTS */}
          <Comments id={id} />
        </Container>
      </Paper>
    </StyledBox>
  );
};

export default SinglePost;
