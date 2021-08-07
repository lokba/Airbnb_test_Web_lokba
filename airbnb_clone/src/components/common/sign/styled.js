import styled from "styled-components";

export const SignBox = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:rgba(0,0,0,0.5);
    z-index:100;
    
    display:flex;
    align-items: center;
    justify-content: center;

    .stage1{
            height:250px;
    }

    .stage2{
            height:350px;
    }  
    .stage3{
        height:300px;
    }

    .stage4{
        height:650px;
    }

    .modal_box{
        width:550px;
        background:white;
        border-radius:15px;

        .modal_header{
            position:relative;
            display:flex;
            align-items: center;
            justify-content: center;
            height:55px;
            font-size:18px;
            font-weight:700;
            border-bottom:1px solid #dddddd;
            

            svg{
                position:absolute;
                left:15px;
                cursor:pointer;
            }

            .closeIcon{
                width:20px;
                height:20px;
            }

            .beforeIcon{
                width:30px;
                height:30px;
            }

            
        }
        .stage1_content{
            display:flex;
            justify-content: center;
            align-items:center;
            height: calc(100% - 55px);

            .sign_btn{
                border:1px solid gray;
                width:90%;
                border-radius:10px;
                height:50px;
                position:relative;
                cursor:pointer;
                display:flex;
                justify-content: center;
                align-items:center;
                font-weight:700;

                &:hover{
                    border:2px solid black;
                }
                
                img{
                    position:absolute;
                    left:20px;
                    width:20px;
                    height:20px;
                }
            }
        }
        .stage2_content{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            height: calc(100% - 55px);
            
            div{
                width:90%;
            }

            .stage2_tit{
                font-size:25px;
                font-weight:700;
                margin-bottom:20px;
            }
            .inputBox{
                height:90px;
            }
        }

        .stage3_content{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            height: calc(100% - 55px);
            
            div,input{
                width:90%;
            }
            .inputBox{
                height:90px;
            }
        }

        .stage4_content{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            height: calc(100% - 55px);


            div{
                width:90%;
            } 

            .inputBox{
                .notice{
                    font-size:12px;
                    color:gray;
                    padding:8px 0 20px 3px;
                    line-height:1.4;
                    em{
                        font-weight:800;
                    }
                    span{
                        color:blue;
                        text-decoration:underline;
                        cursor:pointer;
                        font-weight:600;
                    }
                }
            }

        }
        


    }
`;

export const ErrorMessage = styled.div`
    font-size:12px;
    margin-top:10px;
    color:red;
`;

export const SubmitButton = styled.div`
    background:#dd1a60;
    color:white;
    height:50px;
    border-radius:10px;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:18px;
    margin-top:10px;
    cursor:pointer;
`;