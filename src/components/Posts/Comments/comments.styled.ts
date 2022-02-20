import styled from "styled-components";
import { Box, Stack } from "@mui/material";

export const StyledCommentDiv = styled.div`
  text-align: left;

  .submit {
    margin: 1rem 0;
  }
  h6 {
    font-weight: 400;
  }
  .message {
    text-align: center;
    color: #d9541c;
  }
  .comment-title{
    margin-right:2rem;
  }
  .user-box {
    padding-top: 0.5rem;
    position: relative;
    display: flex;
    align-items: center;
    h5,
    h6 {
      margin: 0.2rem;
    }
  }
  p {
    min-height: 2rem;
    text-indent: 0;
    padding-bottom: 0.4rem;
    margin: 0.2rem;
    position: relative;
  }
.buttons{
    flex-direction:row;
    justify-content:flex-end;
    width:100%;
    
}
  .delete,.liked{
      font-size:0.8em;

  }
`;
export const StyledStack = styled(Stack)`
  position: absolute;
  right: 0.2rem;
  .arrow {
    margin: 0.5rem;
    font-size: 0.8rem;
  }
`;
