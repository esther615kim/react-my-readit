import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex
    display-direction:column;
    height:100%;
    color: #212121;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #fff;
    padding:1rem 1.6rem;
    border-top-right-radius:1.6rem;
    border-top-left-radius:1.6rem;
    a{
        text-decoration:none;
        color:#212121;
    }
    h4{
        padding: 0 1rem;
        text-align:left;
        font-size:1rem;
        color:#3d3f40;
        margin-bottom:0;
    }
    p{
        padding:0 0.2rem;
        overflow:hidden;
        height:4rem;
        text-overflow:ellipsis;
        -webkit-line-clamp: 3;
        
    }
    .post-box{
        position:relative;
        padding:0.2rem;
        padding-bottom:0.8rem;
        height: ${({ height }:{height?:string|undefined}) => height || "10rem"};
        margin-bottom:0.6rem;
        flex-wrap:wrap;
    }
    button{
        font-size:0.7rem;
        padding:0;
    }
    .stack{
        background-color:#fff;
        position:absolute;
        bottom:0;
        left:0.2rem;
        right:0.2rem;
    }
    button:first-child{
        color:hotpink;
    }
`