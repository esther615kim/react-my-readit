import styled from "styled-components";
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
min-height:80vh;
    color: #212121;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #fff;
    border-radius:1.6rem;
    padding-top:2rem;
    display:flex;
    border:1px solid pink;
    flex-direction:column;
    align-items:center;
    .avatar{
        width:30;
        height:30;
    }
    span{
        display:block;
        text-align:right;
        font-size:0.6rem;
        margin:0;
    }
    p{
        margin-top:1rem;
        text-indent:20px;
        overflow:hidden;
        font-size:0.9rem;
        line-height:1rem;
        text-align:justify;
        min-height:12rem;

    }
`
