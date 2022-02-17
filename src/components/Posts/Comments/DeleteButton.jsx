import React from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const DeleteButton = ({id,deleteAComment}) => {

  const handleClickDelete = (e) => {
      e.preventDefault();
      console.log(id);
      deleteAComment(id);
  };

  return (
    <>
      <IconButton
        mt={1}
        sx={{ position: "absolute", right: 2 }}
        onClick={handleClickDelete}
      >
        <DeleteOutlineIcon className="delete" />
      </IconButton>
    </>
  );
};

export default DeleteButton;
