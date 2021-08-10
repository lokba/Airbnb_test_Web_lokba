import styled from "styled-components";

export const ProfilePageBlock = styled.div`
    width:100%;
    height:100%;

    .profile_body{
        margin:130px 15% 0 ;
        display:flex;
        justify-content: space-between;
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

export const ProfileInfoBox = styled.div`
    width:60%;
    font-size:14px;
    header{
        margin-bottom:30px;
        .title{
            font-size:32px;
            font-weight:600;
            margin-bottom:10px;
        }
        .register{
            color:#717171;
            padding-bottom:20px;
        }
        u{
            /* padding-top:16px; */
            font-weight:500;
            cursor:pointer;
        }

        .open{
            cursor:not-allowed;
            color:#dddddd;
        }
    }
    body{
        font-size:16px;
        padding-bottom:35px;
        border-bottom:1px solid #dddddd;
        .intro{
            .intro_tit{
                font-size:24px;
                font-weight:600;
                padding-bottom:30px;
            }
            .intro_txt{
                padding-bottom:30px;
            }
        }
        .info{
            display:flex;
            align-items: center;
            padding-bottom:16px;
            svg{
                width:20px;
                height:20px;
                margin-right:3px;
            }
            
            div{
                padding-top:3px;
            }
        }

        .open_intro{
            width:100%;
            margin-bottom:30px;
            textarea{
                width:100%;
                height:96px;
                padding:8px;
                font-size:16px;
                border-radius:10px;
                outline:none;
                border:1px solid #717171;
                box-sizing:border-box;
            }
        }
        .open_location{
            margin-bottom:30px;
        }
        .open_company{
            margin-bottom:40px;
        }

        .open_tit{
            padding-bottom:8px;
        }
        .inputBox{
            width:100%;
            padding:12px 12px 10px;
            font-size:16px;
            border-radius:10px;
            border:1px solid #717171;
            outline:none;
            box-sizing:border-box;
        }
        .ctrl{
            width:100%;
            display:flex;
            justify-content: space-between;

            .cancelBtn{
                padding:10px;
                font-weight:600;
                text-decoration:underline;
                cursor:pointer;
                background:none;
                border:none;
                font-size:16px;
            }
            .storeBtn{
                padding:14px 24px;
                background:#dddddd;
                border:none;
                font-size:16px;
                cursor:pointer;
                border-radius:10px;
                color:white;
            }
        }
    }
`;

export const CommentBox = styled.div`
    padding:35px 0;
    border-bottom:1px solid #dddddd;

    .tit{
        display:flex;
        align-items:center;
        
        svg{
            margin-right:5px;
        }

        div{
            font-size:22px;
            font-weight:600;
            padding-top:5px;
        }
    }
`;

export const MyCommentBox = styled.div`
    padding:35px 0;
    border-bottom:1px solid #dddddd;

    .tit{
        text-decoration: underline;
        font-weight:500;
        cursor:pointer;
    }
`;