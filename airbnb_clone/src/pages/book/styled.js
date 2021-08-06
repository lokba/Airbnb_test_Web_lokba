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
    margin-left:-17px;

    .icon{
        width:48px;
        height:48px;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-right:15px;
        border-radius:50%;

        svg{
            width:30px;
            height:30px;
        }

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

export const BookPageContent = styled.div`
    display:flex;

`;

export const BookInfoBox = styled.div`
    width:50%;
    margin-bottom:100px;
    .tit{
        font-size:22px;
        padding-bottom:24px;
        font-weight:600;
    }

    .bookInfoList{
        font-size:16px;
        border-bottom:1px solid #dddddd;
        .bookInfoItem{
            padding-bottom:24px;
            .itemTit{
                display:flex;
                justify-content: space-between;
                padding-bottom:8px;
                font-weight:600;
                
                .modify{
                    text-decoration:underline;
                    cursor:pointer;
                }
            }
            .itemValue{
                color:#717171;
            }
        }
    }

    .refund{
        padding:24px 0%;
        color:#717171;
        font-size:16px;
        border-bottom:1px solid #dddddd;

        .refund_tit{
            font-size:22px;
            padding-bottom:24px;
            font-weight:600;
            color:black;
        }
        .detail_charge{
            margin-bottom:16px;
        }
        .detail_corona{
            padding:12px 0;
        }
        span,u{
            font-weight:600;
            color:black;
        }
        u{
            cursor:pointer;
        }
    }
    .notice{
        font-size:12px;
        margin:8px 0;
        padding:24px 0;
        span{
            font-weight:600;
            color:black;
            text-decoration:underline;
            cursor:pointer;
        }
    }
    .submitBtn{
        background :#dd1a60;
        color:white;
        width:130px;
        height:48px;
        border-radius:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
    }
`;

export const BookChargeBox = styled.div`
    width:50%;
    display:flex;
    justify-content: flex-end;
    .chargeBox{
        width:85%;
        border:1px solid #dddddd;
        height:420px;
        border-radius:10px;
        padding:24px;
        box-sizing:border-box;

        .roomInfo{
            display:flex;
            align-items: center;
            padding-bottom:32px;
            border-bottom:1px solid #dddddd;
            .roomImg{
                padding-right:16px;
                img{
                    width:124px;
                    height:106px;
                    border-radius:10px;
                }
            }
            .roomContent{
                font-size:14px;
                .sector{
                    font-size:12px;
                    padding-bottom:5px;
                }
                .moto{
                    padding-bottom:5px;
                }
                .info{
                    font-size:12px;
                    color:#717171;
                    padding-bottom:5px;
                }
                .grade{
                    display:flex;
                    align-items:center;
                    svg{
                        color:#ff5a60;
                        width:20px;
                        height:20px;
                    }
                    .star{
                        margin-right:12px;
                        span{
                            color:#717171;
                        }
                    }
                }
            }
        }
        .chargeTit{
            padding:24px 0;
            font-size:22px;
            font-weight:600;
        }
        .chargeItem{
            display:flex;
            justify-content: space-between;
            margin-bottom:14px;

            .under{
                text-decoration:underline;
                cursor:pointer;
            }
        }
        .total{
            font-weight:700;
            margin-bottom:0;
        }
    }
`;

