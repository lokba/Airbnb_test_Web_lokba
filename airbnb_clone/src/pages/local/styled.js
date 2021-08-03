import styled from "styled-components";

export const LocalBox = styled.div`

`;

export const LocalContentHeader = styled.div`
    margin-top:80px;
    width:55%;
    /* border:1px solid gray; */
    padding:50px 24px 0;
    font-size:14px;
    
    .headerSub{
        padding-bottom:8px;
    }

    .headerTit{
        font-size:32px;
        font-weight:700;
        letter-spacing:2px;
        margin-bottom:20px;
    }
    .controller{
        display:flex;
        align-items: center;
        height:48px;

        .btn{
            display:flex;
            align-items: center;
            justify-content: center;
            padding:0px 16px;
            height:36px;
            border:1px solid #222222;
            border-radius:20px;
            margin-right:8px;
            cursor:pointer;
        }
    }

    .headerNotice{
        height:69px;
        display:flex;
        align-items: center;
        border-bottom:1px solid #dddddd;
        color:#717171;

    }

    .coronaNotice{
        height:42px;
        display:flex;
        align-items: flex-end;
        
        span{
            text-decoration:underline;
            margin-left:3px;
            cursor:pointer;
        }
    }


`;

