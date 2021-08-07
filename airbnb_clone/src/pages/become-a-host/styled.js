import styled from "styled-components";

export const BecomeHostBox = styled.div`
    width:100%;
    height: 100vh;
`;

export const HostIntroBox = styled.div` 
    display:flex;
    width:100%;
    height:100%;

    .host_intro_img{
        width:50%;
        height:100%;
        position:relative;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
        .logo{
            position:absolute;
            top:4%;
            left:6%;
            width:64px;
            height:64px;
            display:flex;
            align-items: center;
            justify-content: center;
            border-radius:50%;
            cursor:pointer;
            &:hover{
                background:rgba(128,128,128,0.25);
            }
            img{
                width:32px;
                height:32px;
            }
        }
    }

    .host_intro_body{
        width:50%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        background:black;
        text-align:center;
        color:white;
        position:relative;

        .tit{
            font-weight:700;
            font-size:48px;
            margin-bottom:32px;
            line-height:1.15;
        }
        .content{
            font-size:18px;
            line-height:1.3;
        }

        .btn{
            position:absolute;
            bottom:0;
            display:flex;
            justify-content: flex-end;
            align-items:center;
            border-top:1px solid #717171;

            width:100%;
            padding:0 20px;
            height:12%;

            .startBtn{
                z-index:100;
                background:#dd1a60;
                padding:16px 23px;
                font-size:16px;
                border-radius:10px;
                color:white;
                cursor:pointer;
            }
        }
        
        .exitBtn{
            position:absolute;
            right:6%;
            top:4%;
            z-index:100;
            background:#222222;
            padding:11px 20px;
            font-size:12px;
            border-radius:40px;
            color:white;
            font-weight:700;
            cursor:pointer;
        }
    }
`;



export const HostStageBox = styled.div`
    display:flex;
    width:100%;
    height:100%;

    .host_stage_img{
        width:50%;
        height:100%;
        position:relative;
        display:flex;
        align-items:center;

        background: url('/images/become_host/img/background.png') no-repeat;
        background-size:100% 100%;

        .logo{
            position:absolute;
            top:4%;
            left:6%;
            width:48px;
            height:48px;
            display:flex;
            align-items: center;
            justify-content: center;
            border-radius:50%;
            cursor:pointer;
            background:rgba(255,255,255,0.9);
            background:#ff5a5e;

            img{
                width:32px;
                height:32px;
            }
        }

        .stage_tit{
            font-size:48px;
            color:white;
            font-weight:600;
            padding-left:60px;
            line-height:1.2;
            letter-spacing :2px;
        }
    }

    .host_stage_body{
        width:50%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        text-align:center;
        position:relative;

        .stage1_list{
            width:70%;
        
            /* height:80%; */
            height:70%;
            overflow-y:scroll;

            .s1_opt{
                display:flex;
                align-items:center ;
                justify-content:space-between;
                padding:14px 25px;
                width:100%;
                border-radius:10px;
                border:1px solid #dddddd;
                margin-bottom:15px;

                &:hover{
                    border:1px solid black;
                }

                .s1_tit{
                    font-size:18px;
                    font-weight:700;
                }
                img{
                    width:56px;
                    height:56px;
                }
            }
            .stage1_on{
                background:#dddddd;
                border:1px solid black;
            }
        }
        .stage2_list{
            width:70%;
            /* height:70%; */

            .s2_opt{
                text-align:left;
                padding:30px 25px;
                width:100%;
                border-radius:10px;
                border:1px solid #dddddd;
                margin-bottom:15px;

                &:hover{
                    border:1px solid black;
                }

                .s2_tit{
                    font-size:18px;
                    font-weight:700;
                    padding-bottom:10px;
                }

                .s2_sub{
                    color:#717171;
                    line-height:1.15;
                }
            }
            .stage2_on{
                background:#dddddd;
                border:1px solid black;
            }
        }

        .stage3_list{
            width:70%;
            /* height:70%; */

            .s3_opt{
                text-align:left;
                padding:40px 25px;
                width:100%;
                border-radius:10px;
                border:1px solid #dddddd;
                margin-bottom:15px;

                &:hover{
                    border:1px solid black;
                }

                .s3_tit{
                    font-size:18px;
                    font-weight:700;
                }
            }
            .stage3_on{
                background:#dddddd;
                border:1px solid black;
            }
        }

        /* stage4 입니다. */
        .locationBar{
            border:1px solid gray;
            width:70%;
            display:flex;
            align-items:center;
            position:absolute;
            top:25%;
            
            padding:15px 30px;
            border-radius:50px;
            svg{
                width:35px;
                height:35px;
                margin-right:20px;
                
            }
            input{
                flex:1;
                padding:10px;
                font-size:16px;
                border:none;
                outline:none;
                font-weight:700;
            }
        }

        .stage5_list{
            width:70%;

            .s5_opt{
                text-align:left;
                padding:30px 25px;
                width:100%;
                border-radius:10px;

                display:flex;
                justify-content: space-between;
                align-items:center;


                .s5_tit{
                    font-size:26px;
                    font-weight:700;
                }

                .s5_ctrl{
                    display:flex;
                    align-items: center;
                    svg{
                        border:1px solid #dddddd;
                        border-radius:50%;
                        cursor:pointer;
                    }
                    div{
                        padding:5px 15px 0;
                    }
                }
            }
        }
        /* -------------------------------------------------------- */

        

        /* -------------------------------------------------------- */

        .btn{
            position:absolute;
            bottom:0;
            display:flex;
            justify-content: space-between;
            align-items:center;
            border-top:1px solid #717171;

            width:100%;
            padding:0 45px;
            height:12%;

            .beforeBtn{
                padding:16px 23px;
                font-size:16px;
                font-weight:700;
                text-decoration:underline;
                cursor:pointer;
            }

            .nextBtn{
                z-index:100;
                background:black;
                padding:16px 23px;
                font-size:16px;
                border-radius:10px;
                color:white;
                cursor:pointer;
            }
        }
        


        .exitBtn{
            position:absolute;
            right:6%;
            top:4%;
            z-index:100;
            background:#dddddd;
            padding:11px 20px;
            font-size:12px;
            border-radius:40px;
            font-weight:700;
            cursor:pointer;
        }


    }

`