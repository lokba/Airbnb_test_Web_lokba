import styled from "styled-components";

export const InputBox = styled.div`
    width:100%;
    border:1px solid gray;
    border-radius:10px;
    height:60px;

    .inputTit{
        font-size:12px;
        padding-left:15px;
        height:20px;
        display:flex;
        align-items: flex-end;
    }
    input{
        border:none;
        height:35px;
        outline:none;
        font-size:16px;
        padding:15px;
        box-sizing:border-box;
        border-radius:10px;
    }
`;
