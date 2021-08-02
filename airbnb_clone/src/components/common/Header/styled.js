import styled from "styled-components";

// color:#ff5a60;   에어비앤비 대표 컬러

export const HeaderBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    
    height:80px;
    padding: 0 80px;

    position:fixed;
    left:0;
    right:0;
    top:58px;

    background:white;
    z-index:10;
    box-shadow:0px 3px 3px 0px #DDDDDD;
    
    /* border:1px solid gray; */
    
    .logoArea{
        display:flex;
        align-items: center;
        cursor:pointer;
        width:300px;
        
        .logoImg{
            margin-right:7px;
        }
        .logoTxt{
            color:#ff5a60;
            font-size:22px;
            font-weight:800;
            padding-top:4px;
        }
    }

    .inputArea{
        padding-left:8px;
        position: relative;
        cursor:pointer;
        
        .inputBox{
            display:flex;
            align-items: center;
            
            width:300px;
            height:48px;
            border-radius:30px;
            border:1px solid #DDDDDD;
            padding-left:16px;
            font-size:14px;
            color:black;
            font-weight:500;


        }

        .inputIconBox{
            position:absolute;
            right:8px;
            top:8px;
            width:32px;
            height:32px;
            background:#ff5a60;
            border:none;
            border-radius:50%;

            
            .inputIcon{
                position:absolute;
                color:white;
                top:8px;
                left:9px;
            }
        }
    }

    .infoArea{
        display:flex;
        align-items: center;
        font-size:14px;
        height:44px;
        width:300px;
        justify-content: flex-end;

        .info_host{
            cursor:pointer;
            padding-top:2px;
            height:100%;
            display:flex;
            align-items: center;
            justify-content: center;
            border-radius:50px;
            padding:0 10px;

            &:hover{
                background :#f8f9fa;
            }
        }

        .info_lang{
            cursor:pointer;
            margin-right:5px;
            width:45px;
            height:100%;
            border-radius: 50%;
            display:flex;
            justify-content: center;
            align-items: center;

            svg{
                width:20px;
                height:20px;
            }

            &:hover{
                background :#f8f9fa;
            }
        }

        .info_profile{
            display:flex;
            align-items: center;
            border-radius:50px;
            border:1px solid #DDDDDD; 
            height:100%;
            width:77px;
            justify-content: space-between;
            padding:0 7px;
            cursor:pointer;

            &:hover{
                box-shadow:0px 3px 3px 0px #DDDDDD;
            }

            svg{
                width:20px;
                height:20px;
            }
            img{
                width:33px;
                height:33px;
                border-radius:50%;
                
            }
        }
        
    }
    
`;
