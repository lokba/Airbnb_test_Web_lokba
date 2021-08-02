import styled from "styled-components";

export const HomePageBox = styled.div`
    height:auto;
    height:2000px; //test 용 
`

export const MainBnrBox = styled.div`
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
            left:80px;

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
`;


export const NearArea = styled.div`
    height:340px;
    margin:0 80px;
    display:flex;
    flex-direction:column;
    justify-content: center;

    .nearArea_tit{
        font-size:32px;
        margin-bottom:20px;
        margin-top:24px;
        font-weight:700;
        letter-spacing:1.7px;
    }

    .nearArea_list{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;
        
        .nearArea_item{
            display:flex;
            align-items: center;
            /* width:300px; */
            width:25%;
            height:64px;
            margin-bottom:16px;
            cursor:pointer;

            img{
                width:64px;
                height:64px;
                border-radius:10px;
                margin-right:10px;
            }

            .nearArea_txt{
                font-size:16px;
                .nearArea_name{
                    font-weight:700;
                    padding-bottom:3px;
                }
                
            }
        }
    }
`;
