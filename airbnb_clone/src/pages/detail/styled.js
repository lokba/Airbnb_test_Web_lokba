import styled from "styled-components";

export const RoomDetailBox = styled.div`
    
    .RoomDetailBody{
        margin-top:80px;
        padding: 0 12%;
        background: rgba(0,0,0,0.03);
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
