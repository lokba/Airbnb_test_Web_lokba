import styled from "styled-components";

export const LocalContentListBox = styled.div`
    .localItemBox{
        height:250px;
        display:flex;
        align-items: center;
        border-bottom:1px solid #dddddd;
        cursor:pointer;
        position:relative;

        text-decoration:none;
        color:black;

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
                        margin-bottom:10px;
                    }
                    .content_moto{
                        font-size:18px;
                        margin-bottom:10px;
                    }
                    .line{
                        width:50px;
                        border:1px solid #dddddd;
                        margin-bottom:12px;
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
