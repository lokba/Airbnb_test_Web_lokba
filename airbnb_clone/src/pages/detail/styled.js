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
        display:flex;
        justify-content: flex-end;
        padding-top:25px;
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

export const RoomFacility = styled.div`
    padding:50px 0;
    border-bottom :1px solid #dddddd;

    .tit{
        padding-bottom:24px;
        font-size:22px;
        font-weight:600;
    }
    .content{
        font-size:16px;

        li{
            padding-bottom:7px;
        }
        
        .seeAllBtn{
            border-radius:10px;
            border:1px solid black;
            cursor:pointer;
            width:180px;
            padding:15px 23px;
            text-align:center;
            margin-top:30px;

            &:hover{
                background :#f8f9fa;
            }
        }
    }
`

export const RoomCheckIn = styled.div`
    padding:50px 0;
    box-sizing:border-box;
    height:500px;

    .tit{
        padding-bottom:8px;
        font-size:22px;
        font-weight:600;
    }
    .sub{
        font-size:14px;
        color :#717171;
    }
`;

export const ReservationBox = styled.div`
    border:1px solid #dddddd;
    /* box-shadow:0px 3px 3px 0px #DDDDDD; */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    box-sizing:border-box;
    border-radius:20px;
    width:370px;
    height:355px;
    padding:24px;
    position:absolute;


    .tit{
        font-size:22px;
        padding-bottom:7px;
    }
    .sub{
        display:flex;
        align-items:center;
        padding-bottom:30px;

        svg{
            color:#dd1a60;
        }
        div{
            padding-top:3px;

            span{
                margin-left:3px;
                color:#717171;
                text-decoration:underline;
                cursor:pointer;
            }
        }
    }

    .reserveBox{
        /* display:flex; */
        width:100%;
        border-radius:10px;
        border:1px solid gray;
        cursor:pointer;
        margin-bottom:20px;

        .checkInOut{
            display:flex;
            border-bottom:1px solid gray;
            >div{
                width:50%;
                padding:10px;
                height:56px;
                box-sizing:border-box;

                .opt_tit{
                    font-size:12px;
                    padding-bottom:3px;
                }
                .opt_txt{
                    font-size:14px;
                    color:#717171;
                }
            }
            .checkIn{
                border-right:1px solid gray;
            }

        }
        .guest{
            padding:10px;
            height:56px;
            box-sizing:border-box;
            position:relative;

            .opt_tit{
                font-size:12px;
                padding-bottom:3px;
            }
            .opt_txt{
                font-size:14px;
                color:#717171;
            }
            svg{
                position:absolute;
                right:7px;
                top:8px;
                width:40px;
                height:40px;
            }
        }
    }
    .reserveBtn{
        border:1px solid red;
        border-radius:10px;
        width:100%;
        height:48px;
        display:flex;
        justify-content: center;
        align-items: center;
        background:#dd1a60;
        color:white;
        font-weight:600;
        cursor:pointer;
    }
`;

export const CommentBox = styled.div`
    padding:50px 0;
    border-top:1px solid #dddddd;
    border-bottom:1px solid #dddddd;

    .grade{
        display:flex;
        align-items: center;
        font-size:22px;
        padding-bottom:40px;
        font-weight:600;
        svg{
            color:#dd1a60;
        }
    }

    .commentList{
        display:flex;
        flex-wrap:wrap;

        .commentItem{
            width:50%;
            padding-bottom:40px;

            .header{
                display:flex;
                align-items: center;
                padding-bottom:10px;

                .profile{
                    padding-right:12px;
                    img{
                        width:56px;
                        height:56px;
                        border-radius:50%;
                        
                    }
                }
                .writer{
                    .name{
                        font-size:16px;
                        font-weight:600;
                    }
                    .date{
                        font-size:12px;
                        color:#717171;
                    }
                }
            }
            .txt{
                font-size:16px;
            }
        }
    }

    .seeAllBtn{
        cursor:pointer;
        box-sizing:border-box;
        border:1px solid black;
        width:173px;
        height:48px;
        display:flex;
        align-items: center;
        justify-content: center;
        font-size:16px;
        border-radius:10px;
    }

`;
