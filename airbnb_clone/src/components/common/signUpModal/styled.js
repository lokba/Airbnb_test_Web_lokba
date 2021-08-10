import styled from "styled-components";

export const SignUpModalBlock = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0; 
    bottom: 0;
    background:rgba(0,0,0,0.5);
    z-index:100;
    
    display:flex;
    align-items: center;
    justify-content: center;

`;

export const SignUpModalContent = styled.div`
    width:400px;
    height:160px;
    background:white;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    .txt{
        font-size:24px;
        font-weight:700;
        padding-bottom:30px;
        
    }

    .btn{
        border:1px solid gray;
        padding:10px 23px;
        font-weight:600;
        cursor:pointer;
    }

`;