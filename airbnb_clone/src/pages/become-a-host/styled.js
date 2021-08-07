import styled from "styled-components";

export const BecomeHostBox = styled.div`
    width:100%;
    height: 100vh;

    display:flex;

    .hostImg{
        width:50%;
        height:100%;
        position:relative;

        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }

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
                background:rgba(128,128,128,0.25);
            }

            img{
                width:32px;
                height:32px;
            }
        }
    }

    .hostBody{
        width:50%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        background:black;

        text-align:center;
        color:white;


        position:relative;
        .tit{
            font-weight:700;
            font-size:48px;
            margin-bottom:32px;
            line-height:1.15;
        }
        .content{
            font-size:18px;
            line-height:1.3;
        }

        .bar{
            position:absolute;
            right:0;
            bottom:11%;
            width:100%;
            border-bottom:1px solid #717171;
        }

        
        .startBtn{
            position:absolute;
            right:6%;
            bottom:3%;

            z-index:100;
            background:#dd1a60;
            padding:16px 23px;
            font-size:16px;
            border-radius:10px;
            color:white;
            cursor:pointer;
        }

        .exitBtn{
            position:absolute;
            right:6%;
            top:4%;

            z-index:100;
            background:#222222;
            padding:11px 20px;
            font-size:12px;
            border-radius:40px;
            color:white;
            font-weight:700;
            cursor:pointer;
        }
        
    }
`;
