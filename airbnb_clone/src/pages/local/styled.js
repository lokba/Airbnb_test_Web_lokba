import styled from "styled-components";

export const LocalBox = styled.div`

`;


export const LocalContent = styled.div`
    width:55%;
    padding:50px 24px 0;
`;

export const LocalContentHeader = styled.div`
    margin-top:80px;
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
        height:69px;
        display:flex;
        align-items: center;
        border-bottom:1px solid #dddddd;
        
        span{
            text-decoration:underline;
            margin-left:3px;
            cursor:pointer;
        }
    }
`;



export const LocalContentList = styled.div`
    .localItemBox{
        height:250px;
        display:flex;
        align-items: center;
        border-bottom:1px solid #dddddd;
        cursor:pointer;
        position:relative;

        .localItem{
            height:200px;
            display:flex;

            .localItem_img{
                margin-right:10px;
                img{
                    width:300px;
                    height:200px;
                    border-radius:10px;
                    cursor:pointer;
                }
            }

            .localItem_content{
                display:flex;
                flex-direction:column;
                justify-content: space-between;

                .localItem_head{
                    .content_sector{
                        color:#717171;
                        margin-bottom:8px;
                    }
                    .content_moto{
                        font-size:18px;
                        margin-bottom:10px;
                    }
                    .line{
                        width:50px;
                        border:1px solid #dddddd;
                        margin-bottom:10px;
                    }
                    .content_info{
                        margin-bottom:5px;
                        color:#717171;
                    }
                }
                .localItem_foot{
                    display:flex;
                    align-items: center;

                    svg{
                        color:red;
                    }
                    div{
                        padding-top:4px;
                    }
                    .star{
                        font-weight:700;
                    }
                    .comment{
                        color:#717171;
                        padding-left:3px;
                    }
                }

                .heart{
                    position:absolute;
                    top:15px;
                    right:0;
                    svg{
                        width:30px;
                        height:30px;
                    }
                    .heartOn{
                        color:red;
                    }
                }
            }
            
        }
    }
`;
