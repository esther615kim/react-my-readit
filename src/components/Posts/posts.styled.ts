import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex
    display-direction:column;
    height:75vh;
    color: #212121;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #fff;
    padding:1rem 1.6rem;
    border-top-right-radius:1.6rem;
    border-top-left-radius:1.6rem;
    h3{
        text-align:left;
        color:#3d3f40;
    }
    div{
        padding:0.2rem;
        padding-bottom:0.6rem;
        max-height:10rem;
        margin-bottom:0.6rem;
    }
`