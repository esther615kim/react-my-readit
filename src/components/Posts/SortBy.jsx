import React,{ useState,useContext } from "react";
import {
  FormControl,
  NativeSelect,
} from "@mui/material";
import { StyledWrapper } from "./posts.styled";
import ArticleContext from '../../contexts/articleContext';

export default function SortBy() {

  const {setSort_by,setOrder} =useContext(ArticleContext);

  const handleOrderChange = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };

  const handleSortingChange = (e) => {
    e.preventDefault();
    setSort_by(e.target.value);
  };

  return (
    <StyledWrapper>
      <FormControl
        margin="dense"
        size="small"
        variant="outlined"
        sx={{ width: "2rem" }}
      >
        <NativeSelect
          sx={{ fontSize: "0.7rem" }}
          defaultValue={"desc"}
          inputProps={{
            name: "sort_by",
          }}
          onChange={handleSortingChange}
        >
          <option value={"created_at"}>date</option>
          <option value={"votes"}>popular</option>
          <option value={"title"}>title</option>
        </NativeSelect>
      </FormControl>
      <FormControl
        margin="dense"
        size="small"
        variant="outlined"
        sx={{ width: "2rem" }}
      >
        <NativeSelect
          sx={{ fontSize: "0.7rem" }}
          defaultValue={"desc"}
          inputProps={{
            name: "order",
          }}
          onChange={handleOrderChange}
        >
          <option value={"desc"}>desc</option>
          <option value={"asc"}>asc</option>
        </NativeSelect>
      </FormControl>
    </StyledWrapper>
  );
}
