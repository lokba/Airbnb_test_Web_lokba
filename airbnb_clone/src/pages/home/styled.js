import styled from "styled-components";

export const HomePageBox = styled.div`
    height:auto;
    height:2000px; //test 용 

    .main_bnr{
        width:100%;
        height:728px;
        overflow:hidden;
        position:relative;

        img{
            width:100%;  
            /* height:750px;   */
            height:755px;
        }

        .main_bnr_txt{
            position:absolute;
            top:330px;
            left:90px;

            width :360px;
            font-size:48px;
            font-weight:700;
            line-height:1.15;
            color:white;
            letter-spacing: 3px;

            .main_bnr_btn{
                width: 114px;
                height:34px;
                font-size:14px;
                color:black;
                background:white;
                display:flex;
                border-radius:10px;
                align-items: center;
                justify-content: center;
                margin-top:15px;
                cursor:pointer;
                letter-spacing:normal;
            }
            
        }
    }

`