import styled from "styled-components";

export const HostingPageBox = styled.div`
    margin-top:80px;
    .hostingPageBody{
        padding:0 80px;
    }
`;

export const TodaySection = styled.div`
    width:100%;
    height:264px;

    background:url('/images/hosting/today_bg.png') no-repeat;
    background-size:100% 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    color:white;
    padding-left:80px;
    .tit{
        font-size:32px;
        font-weight:600;
        margin-bottom:20px;
    }
    .contentBox{
        width:308px;
        height:76px;
        background:white;
        color:black;
        display:flex;
        flex-direction:column;
        justify-content: center;
        padding-left:20px;
        border-radius:10px;
        font-size:14px;
        cursor:pointer;


        .main{
            font-weight:600;
            margin-bottom:5px;
        }
        .sub{
            color:#717171;
        }
    }
`;


export const MethodSection = styled.div`
    padding:64px 0 40px;

    .tit{
        font-size:26px;
        margin-bottom:16px;
        font-weight:600;
    }
    .sub{
        font-size:16px;
        color:#717171;
        margin-bottom:16px;
    }

    .methodList{
        display:flex;
        
        .methodItem{
            height:405px;
            margin-right:16px;
            display:flex;
            flex-direction:column;
            cursor:pointer;

            img{
                width:335px;
                height:335px;
            }
            div{
                color:white;
                background:black;
                height:100%;
                display:flex;
                align-items: center;
                padding-left:20px;
                font-size:18px;
                font-weight:600;
                
            }
        }
    }

`;


export const ReserveSection = styled.div`

`