import React from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const DeleteButton = ({id,deleteAComment}) => {

  const handleClickDelete = (e) => {
      e.preventDefault();
      deleteAComment(id);
  };

  return (
    <>
      <IconButton
        onClick={handleClickDelete}
      >
        <DeleteOutlineIcon className="delete" />
      </IconButton>
    </>
  );
};

export default DeleteButton;
