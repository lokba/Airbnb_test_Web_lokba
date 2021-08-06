import styled from "styled-components";

export const RoomDetailBox = styled.div`
    
    .RoomDetailBody{
        margin-top:80px;
        padding: 0 12%;
        /* background: rgba(0,0,0,0.03); */
    }
`;

export const RoomDetailHeader = styled.div`
    height:auto;
    padding:25px 0;


    .roomHeaderTit{
        font-size:26px;
        font-weight:600;
        padding-bottom:5px;
        
    }
    .roomHeaderBody{
        display:flex;
        justify-content: space-between;
        font-size:14px;
        color :#717171;

        div{
            display:flex;
            align-items:center;
        }

        .roomHeaderInfo{
            >div{
                padding-right:5px;

                .grade{
                    font-weight:700;
                    color:black;
                    .comments{
                        font-weight:500;
                        padding-left:5px;
                        text-decoration:underline;
                        color:#717171;
                        cursor:pointer;
                    }
                }

                svg{
                    color:#ff5a60;
                    padding-right:3px;
                }

            }
            .locate{
                    text-decoration:underline;
                    font-weight:700;
                    cursor:pointer;
            }
            
        }  

        .accessBtn{
            .btn{
                padding:7px 7px;
                border-radius:10px;
                cursor:pointer;

                &:hover{
                    background :#f8f9fa;
                }
                svg{
                    width:18px;
                    height:18px;
                    padding-right:7px;
                }
                div{
                    text-decoration:underline;
                    font-weight:600;
                }
            }

            .share{
                margin-right:5px;
            }
        }
    }
`;


export const RoomDetailImgBox = styled.div`
    display:flex;
    height:400px;
    /* border:1px solid red; */


    .mainImg{
        width:50%;
        margin-right:8px;
        img{
            width:100%;
            height:100%;
            border-radius:10px;
            cursor:pointer;
        }
    }
    .subImg{
        width:50%;
        height:100%;

        div{
            display:flex;
            justify-content: space-between;
            height:50%;
            width:100%;

            img{
                width:49%;
                height:98%;
                cursor:pointer;
            }
        }

        .subImg_under{
            align-items: flex-end;
        }
    }
`;


export const RoomDetailContent = styled.div`
    display:flex;
    
    .content{
        width:60%;
        
    }
    .reservation{
        width:40%;
    }
`;

export const RoomHosterInfo = styled.div`
    height:120px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    font-size:16px;
    border-bottom:1px solid #dddddd;

    .hosterInfo{
        font-size:22px;
        padding-bottom:5px;
        font-weight:600;
    }
`;


export const RoomAboutInfo = styled.div`
    padding:30px 0 10px;
    border-bottom :1px solid #dddddd;
    .aboutItem{
        display:flex;
        height:auto;
        padding:10px 0 20px;
        
        .info_img{
            margin-right:15px;
            .house{
                width:28px;
                height:28px;
            }
            .clean{
                width:28px;
                height:28px;
            }
            .checkin{
                width:28px;
                height:28px;
            }
            .medal{
                width:28px;
                height:28px;
            }
        }
        .info_content{
            .list_tit{
                font-size:16px;
                padding-bottom:4px;
                font-weight:600;

            }
            .list_txt{
                font-size:14px;
                color:#717171;

                span{
                    text-decoration:underline;
                    cursor:pointer;
                    font-weight:600;
                    color:black;
                }
            }
        }
        
    }
`;


export const RoomDetailInfo = styled.div`
    padding:40px 0;
    font-size:16px;
    border-bottom :1px solid #dddddd;

    .location{
        padding-bottom:30px;
    }
    .detailInfo{
        div{
            margin-bottom:2px;
        }
    }
`;

export const RoomPlace = styled.div`
    padding:40px 0;
    border-bottom :1px solid #dddddd;

    .tit{
        padding-bottom:24px;
        font-size:22px;
        font-weight:600;
    }
    .content{
        padding:24px;
        border:1px solid #dddddd;
        border-radius:10px;
        width:230px;

        img{
            width:24px;
            height:24px;
            padding-bottom:16px;
        }
        .content_tit{
            padding-bottom:8px;
            font-size:16px;
            font-weight:600;
        }
        .content_sub{
            font-size:14px;
        }

    }
`;
