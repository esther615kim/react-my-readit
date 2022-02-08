import React from "react";
import { Stack, Chip } from "@mui/material/";

const Categories = () => {
  return (
    <Stack
    m={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Chip
        label="category1"
        //   onClick={handleClick}
      />
      <Chip label="category2" />
      <Chip label="category3" />
    </Stack>
  );
};

export default Categories;
