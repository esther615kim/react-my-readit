import React, { useContext } from "react";
import { Divider, Avatar, Box, Stack } from "@mui/material";
import { StyledLikedButton } from "../posts.styled";
import LikeButton from "../LikeButton";
import DeleteButton from "./DeleteButton";
import AuthContext from "../../../contexts/authContext";

const CommentCard = ({ comments, deleteAComment }) => {
  const { username, loggedin } = useContext(AuthContext);

  return (
    <>
      {comments.map((item) => {
        return (
          <Box key={item.comment_id}>
            <div className="user-box">
              <Avatar sx={{ width: 26, height: 26, marginRight: 1 }} />
              <Box sx={{width:"8rem"}}>
                <h5>{item.author}</h5>
                <h6>{item.created_at.substr(0, 10)}</h6>
              </Box>
              {/* DELETE & LIKE BUTTONS */}
              <Stack className="buttons">
                <StyledLikedButton sx={{fontSize:12}}>
                  <LikeButton 
                  item={item} />
                  {item.votes}
                </StyledLikedButton>
                {loggedin && item.author ===username && (
                  <DeleteButton
                    id={item?.comment_id}
                    deleteAComment={deleteAComment}
                  />
                )}
              </Stack>
            </div>
            <p className="comment">{item.body}</p>
            <Divider />
          </Box>
        );
      })}
    </>
  );
};

export default CommentCard;
