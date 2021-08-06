import styled from "styled-components";

export const BookPageBox = styled.div`

    .bookPageBody{
        margin-top:80px;
        margin:80px 12% 0; 
        padding-top:64px;
    }
`;


export const BookPageHeader = styled.div`
    display:flex;
    align-items: center;
    padding-bottom:16px;
    margin-bottom:32px;

    .icon{
        width:48px;
        height:48px;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-right:15px;
        border-radius:50%;

        &:hover{
            background :#f8f9fa;
        }
    }

    .tit{
        font-size:32px;
        font-weight:700;
        padding-top:5px;
    }
`


