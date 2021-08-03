import styled from "styled-components";

export const PaginationBox = styled.div`
    height:218px;
    display:flex;
    align-items: center;
    justify-content: center;
    
    .pagination_content{
        height:114px;
        text-align:center;

        .navigation{
            display:flex;
            align-items:center;
            justify-content: center;
            margin-bottom:15px;

            .icon{
                width:32px;
                height:32px;
                display:flex;
                align-items:center;
                justify-content: center;

                svg{
                    margin:0 8px;
                    width:25px;
                    height:25px;
                    color:black;
                }
            }

            .arrow{
                cursor:pointer;
                &:hover{
                    background:#dddddd;
                    border-radius:50%;
                }
            }

            .pageNumber{
                width:32px;
                height:32px;
                margin:0 8px;
                display:flex;
                align-items:center;
                justify-content: center;
                padding-top:3px;
                cursor:pointer;
                font-weight:600;

                &:hover{
                    background:#dddddd;
                    border-radius:50%;
                }
            }
        }
        .roomNumber{
            margin-bottom:30px;
        }
        .pagination_notice{
            color:#717171;
            font-size:12px;
        }
    }
    
`;