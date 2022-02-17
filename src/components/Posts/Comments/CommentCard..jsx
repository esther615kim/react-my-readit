import { Divider, Avatar, IconButton, Box } from "@mui/material";
import Votes from "./Votes";

import DeleteButton from "./DeleteButton";

const CommentCard = ({ comments, deleteComment }) => {
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
              <Votes item={item} />
            </div>
            <p>
              {item.body}
              <DeleteButton 
              id={item?.comment_id}
              deleteComment={deleteComment} />
            </p>
            <Divider />
          </Box>
        );
      })}
    </>
  );
};

export default CommentCard;
