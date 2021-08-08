import styled from "styled-components";

export const HeaderBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    
    height:80px;
    padding: 0 21px;

    position:fixed;
    left:0;
    right:0;
    top:0;

    background:white;
    z-index:1000;
    box-shadow:0px 3px 3px 0px #DDDDDD;

    .logoArea{
        display:flex;
        align-items: center;
        cursor:pointer;
        width:300px;
        text-decoration:none;
    }

    .infoArea{
        display:flex;
        align-items: center;
        font-size:14px;
        height:44px;
        width:300px;
        justify-content: flex-end;

        .info_profile{
            display:flex;
            align-items: center;
            border-radius:50px;
            border:1px solid #DDDDDD; 
            height:100%;
            padding:0 7px;
            box-sizing:border-box;
            position:relative;

            .profile_box{
                display:flex;
                align-items: center;
                justify-content: space-between;
                width:100%;

                svg{
                    width:20px;
                    height:20px;
                }
                img{
                    width:33px;
                    height:33px;
                    border-radius:50%;
                }
                cursor:pointer;
            }

            &:hover{
                box-shadow:0px 3px 3px 0px #DDDDDD;
            }
            
            .profile_option{
                position:absolute;
                width:240px;
                top:55px;
                border:1px solid #DDDDDD;
                right:0;
                z-index:1000;
                padding:10px 0;
                background:white;
                border-radius:15px;

                a{
                    display:block;
                }
                
                div,a{
                    font-size:14px;
                    padding:14px 15px;
                    cursor:pointer;

                    &:hover{
                        background :#f8f9fa;
                    }
                }

                .bar{
                    display:block;
                    margin:5px 0;
                    width:100%;
                    border:1px solid #DDDDDD;
                }

                .stress{
                    font-weight:700;
                }
            }
        }
    }
`;