import styled from "styled-components";

export const ProfilePageBlock = styled.div`
    width:100%;
    height:100%;
    border:1px solid red;
    .profile_body{
        margin:130px 15% 0 ;
    }
`;

export const ProfileBox = styled.div`
    padding:24px 24px 100px;
    width:32%;
    height:auto;
    border:1px solid #dddddd;
    border-radius:10px;

    .profileImg{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-bottom:30px;

        img{
            width:128px;
            height:128px;
            border-radius:50%;
            margin-bottom:8px;
        }
        div{
            text-decoration:underline;
            font-size:14px;
            cursor:pointer;
        }
    }

    .verify{
        font-size:16px;
        svg{
            padding-bottom:16px;
        }
        .verify_tit{
            padding-bottom:8px;
            font-size:18px;
            font-weight:600;
        }

        .verify_txt{
            padding-bottom:16px;
            line-height:1.3;
            
        }
        button{
            cursor:pointer;
            padding:13px 23px;
            border-radius:10px;
            background:white;
            font-size:16px;
            border:1px solid black;
            font-weight:600;
        }

    }

    
`;

export const ProfileInfoBox = styled.div``;