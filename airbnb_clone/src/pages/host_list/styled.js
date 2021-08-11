import styled from "styled-components";

export const HostingListBlock = styled.div`
    padding:80px 0;
`;

export const HostingListBox = styled.div`
    padding:40px 5% 0;

    header{
        display:flex;
        justify-content: space-between;
        margin-bottom:16px;
        
        .tit{
            font-size:22px;
            font-weight:600;
        }
        button{
            display:flex;
            align-items:center;
            padding:8px 16px;
            font-size:14px;
            border-radius:10px;
            background:white;
            border:1px solid black;
            cursor:pointer;
        }
    }
    nav{
        display:flex;
        align-items:center;
        justify-content: space-between;
        padding:20px 0;
        border-bottom:1px solid #dddddd;
        font-weight:600;

        >div{
            text-align:center;
        }

        .imgSector{
            width:280px;
        }
        .statusSector{           
            width:80px;
        }
        .bedroomSector{
            width:50px;
        }
        .bedSector{
            width:50px;
        }
        .bathroomSector{
            width:50px;
        }

        .locationSector{
            width:180px;
        }
        .updateSector{
            width:200px;
        }
        
    }

    body{
        display:flex;
        flex-direction:column;

        .roomItem{
            display:flex;
            align-items:center;
            justify-content: space-between;
            padding:20px 0;
            border-bottom:1px solid #dddddd;

            >div{
                text-align:center;
            }
            .imgSector{
                display:flex;
                align-items: center;
                width:280px;

                img{
                    width:40px;
                    height:40px;
                    margin-right:15px;
                }
            }
            .statusSector{
                width:80px;
            }
            .bedroomSector{
                width:50px;
            }
            .bedSector{
                width:50px;
            }
            .bathroomSector{
                width:50px;
            }
            .locationSector{
                width:180px;
            }
            .updateSector{
                width:200px;
            }
        }
    }
`