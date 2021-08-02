import styled from "styled-components";

export const FlexSearchBox = styled.div`

`;


export const FlexSearchHeader = styled.div`
    margin:90px 80px 0;
    display:flex;
    justify-content: space-between;
    /* align-items: center; */

    height:80px;
    /* border:1px solid gray; */
    
    .menus{
        display:flex;
        align-items: center;
        
        .menu{
            display:flex;
            align-items:center;
            padding:10px;
            cursor:pointer;
            border-radius:10px;
            font-size:14px;
            color:#717171;
            &:hover{
                background :#f8f9fa;
            }
            img{
                width:20px;
                height:20px;
                margin-right:8px;
                margin-bottom:4px;
            }
        }
        .menuOn{
            border-bottom:2px solid black;
            border-radius:0;
            color:#222222;
            font-weight:700;
        }
    }
    
    .filterBox{
        display:flex;
        align-items: center;
        font-size:14px;
        .filterItem{
            display:flex;
            align-items: center;
            justify-content: center;
            padding:10px 16px;
            border:1px solid #dddddd;
            border-radius:20px;
            margin-left:10px;
            cursor:pointer;

            div{
                padding-top:2px;
            }

            &:hover{
                border:1px solid black;
            }

            .arrow{
                width:20px;
                height:20px;
                margin-left:5px;
            }
            .filter{
                margin-right:5px;
            }
        }
    }
`

export const SearchBox = styled.div`
    padding-top:16px;
    margin:0 80px;

    height:auto;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;


export const SearchItemBox = styled.div`
    width:24%;
    margin-bottom:30px;
    
    .search_img{
        position:relative;
        width:100%;
        margin-bottom:10px;

        img{
            border-radius:10px;
            position:absolute;
            width:100%;
            height:100%;
        }
    }

    .search_img:after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .search_info{
        display:flex;
        justify-content: space-between;
        font-size:16px;
        margin-bottom:5px;

        .location{
            font-weight:600;
        }
    }
`;