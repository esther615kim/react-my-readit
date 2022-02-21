import styled from "styled-components";
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
position:absolute;
padding:0.2rem;
margin:1rem;
div{
    position:fixed;
    width:96%;
    bottom:2px;
    left:0.5rem;
    background:#eee;
    border-radius:0.6rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    z-index:9;
}
`
export const StyledDiv = styled.div`
padding:0.4rem;
a{
    text-decoration:none;
    color:#fff;
}
.title{
    margin:0 0 0 0.4rem;
    padding:0;
}
button{
    color:#f26805
}

`