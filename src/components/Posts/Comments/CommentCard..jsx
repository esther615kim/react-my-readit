import { Divider, Avatar, Box, Stack } from "@mui/material";
import LikeButton from "../LikeButton";
import { StyledLikedButton } from "../posts.styled";

import DeleteButton from "./DeleteButton";

const CommentCard = ({ comments, deleteAComment }) => {
  return (
    <>
      {comments.map((item) => {
        return (
          <Box key={item.comment_id}>
            <div className="user-box">
              <Avatar sx={{ width: 26, height: 26, marginRight: 1 }} />
              <div>
                <h5>{item.author}</h5>
                <h6>{item.created_at.substr(0, 10)}</h6>
              </div>
              {/* <Votes item={item} /> */}
              <Stack  className="buttons">
              <StyledLikedButton>
                <LikeButton/>
                 {item.votes}
                  </StyledLikedButton>
                <DeleteButton
                  id={item?.comment_id}
                  deleteAComment={deleteAComment}
                />
                </Stack>
            </div>
            <p>{item.body}</p>
            <Divider />
          </Box>
        );
      })}
    </>
  );
};

export default CommentCard;
