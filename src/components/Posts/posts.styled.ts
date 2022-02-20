import styled from "styled-components";
import { Box,Button,Paper } from '@mui/material';

export const StyledDiv = styled.div`

    height:100%;
    color: #212121;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #fff;
    border-top-right-radius:1.6rem;
    border-top-left-radius:1.6rem;

    .chip:hover{
        background:#212121;
        color:#fff;
    }
    a{
        text-decoration:none;
        color:#212121;

    }
    .h4{
        padding: 0 1.5rem;
        text-align:left;
        font-size:rem;
        max-width:19rem;
        margin-bottom:0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    span{
        display:block;
        text-align:right;
        font-size:0.6rem;
        margin:0;
        padding:0 1rem;
    }
    p{
        padding:0 1.6rem;
        overflow:hidden;
        font-size:0.8rem;
        line-height:1rem;
        height:4rem;
        text-overflow:ellipsis;
        -webkit-line-clamp: 3;
        text-align:justify;
        
    }
    .css-11e3kdx-MuiGrid-root{
        margin:0 0.6rem;
    }
    .post-box{
        position:relative;
        max-width:30rem;
        margin-right:0;
        padding:0.5rem 0;
        height: ${({ height }:{height?:string|undefined}) => height || "10rem"};
        flex-wrap:wrap;
        margin-bottom:0.4rem;
    }
    button{
        font-size:0.7rem;
        padding:0;
    }
    .stack{
        position:absolute;
        padding:0.2rem;
        bottom:0;
        left:0rem;
        right:0.2rem;
    }
    .liked{
        color:#f26805;
    }
`
export const StyledLikedButton = styled(Button)`
font-size: 0.8rem;
border:1px solid #eee;
svg{
    font-size:1rem;
    padding-right:0.2rem;
    color:#e67ca5;
}
`

export const StyledWrapper =styled.div`
margin-left:5rem;
`

export const StyledBox = styled(Box)`
height:100%;
    color: #212121;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #fff;
    border-top-right-radius:1.6rem;
    border-top-left-radius:1.6rem;
    .author-box{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:2rem;
        padidng-bottom:1rem;
        h5{
            padding:0;
            margin:0;
        }
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

export const StyledPaper = styled(Paper)`

`