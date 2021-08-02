import styled from "styled-components";

export const FooterBox = styled.div`
    width:100%;
    border-top:1px solid #dddddd;
    background : #f7f7f7;

    .content{
        margin:0 80px;
        display:flex;
        padding:48px 0;
        color:#222222;

        border-bottom:1px solid #dddddd;
        
        .content_item{
            width:25%;
            margin-right:12px;
            font-size:14px;

            div{
                padding-top:22px;
                cursor:pointer;
                
                &:hover{
                    text-decoration:underline;
                }
            }

            .content_item_tit{
                font-size:12px;
                font-weight:700;
                padding-top:0;
            }
        }
    }

    .copyright{
        margin:0 80px;
        padding:29px 0;
        height:69px;
        font-size:14px;
        
        display:flex;
        color:#222222;

        .company{
            margin-right:10px;
        }

        
        .copyright_list{
            display:flex;
            margin-right:7px;

            .txt{
                margin-left:7px;
                cursor:pointer;

                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }
`;
