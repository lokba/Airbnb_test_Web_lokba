import styled from "styled-components";

export const HostPageBox = styled.div`
    width:100%;
    height: 100vh;

    display:flex;

    .hostTxt{
        width:50%;
        height:100%;
        display:flex;
        justify-content: center;
        align-items:center;
        background:black;

        text-align:center;
        font-size:64px;
        color:white;
        font-weight:700;
        line-height:1.15;

        position:relative;

        .logo{
            position:absolute;
            top:4%;
            left:6%;

            width:64px;
            height:64px;
            display:flex;
            align-items: center;
            justify-content: center;
            border-radius:50%;
            cursor:pointer;

            &:hover{
                background:rgba(128,128,128,0.65);
            }
        }
    }

    .hostImg{
        width:50%;
        height:100%;
        position:relative;

        img{
            width:100%;
            height:100%;
        }

        .startBtn{
            position:absolute;
            right:6%;
            bottom:6%;

            z-index:100;
            background:#dd1a60;
            padding:16px 23px;
            border-radius:10px;
            color:white;
            cursor:pointer;
        }
    }
`;