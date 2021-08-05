import React, { useEffect, useState } from 'react';
import { HeaderBox, SignModal } from './styled';
import { BiSearch } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { Link, withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const Header = ({ match, flex_search, local_area, travel }) => {

    const [onProfile, setOnProfile] = useState(false);
    const [signModal, setSignModal] = useState(false);
    const [signStage, setSignStage] = useState(1);


    useEffect(() => {
        const header = document.querySelector('.headerBox');

        if (header) {
            if (match.url === '/') {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset >= 0 && window.pageYOffset < 58) {
                        const top = 58 - `${window.pageYOffset}`;

                        header.style.top = `${top}px`;
                    }
                    else {
                        header.style.top = '0px';
                    }
                });
            }
            else {
                header.style.top = '0px';
            }
        }

    }, [match.url]);




    return (
        <HeaderBox className="headerBox" local_area={local_area} travel={travel}>
            <Link to="/" className="logoArea">
                <img className="logoImg" src="/images/icons/red_logo.png" alt="" />
                <div className="logoTxt">airbnb</div>
            </Link>
            {
                flex_search ?
                    (
                        <>
                        </>
                    ) :
                    local_area ?
                        (
                            <div className="inputArea">
                                <div className="inputBox">
                                    <div className="inputTxt localArea">
                                        <div className="area">{local_area}</div>
                                        <div className="date">날짜 입력</div>
                                        <div className="guest">게스트 추가</div>
                                    </div>
                                </div>
                                <div className="inputIconBox">
                                    <BiSearch className="inputIcon" />
                                </div>
                            </div >
                        )
                        :
                        (
                            <div className="inputArea">
                                <div className="inputBox">
                                    <div className="inputTxt">
                                        검색 시작하기
                                    </div>
                                </div>
                                <div className="inputIconBox">
                                    <BiSearch className="inputIcon" />
                                </div>
                            </div >
                        )

            }

            <div className="infoArea">
                <div className="info_host">호스트 되기</div>
                <div className="info_lang">
                    <MdLanguage />
                </div>
                <div className="info_profile">
                    <div className="profile_box" onClick={() => setOnProfile(!onProfile)}>
                        <IoIosMenu />
                        <img src="/images/icons/profile.png" alt="" />
                    </div>

                    {
                        onProfile && (
                            <div className="profile_option">
                                <div className="login" onClick={() => { setSignModal(true); setOnProfile(!onProfile) }}>로그인</div>
                                <div className="register" onClick={() => { setSignModal(true); setOnProfile(!onProfile) }}>회원가입</div>
                                <span className="bar"></span>
                                <div className="host">숙소 호스트 되기</div>
                                <div className="help">도움말</div>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                signModal && (
                    <SignModal>
                        {
                            signStage === 1 && (
                                <div className="modal_box stage1">
                                    <div className="modal_header">
                                        <CloseIcon onClick={() => { setSignModal(false); setSignStage(1); }} />
                                        <div>로그인 또는 회원 가입</div>
                                    </div>
                                    <div className="modal_content">
                                        <div className="sign_btn" onClick={() => setSignStage(2)}>
                                            <img src="/images/icons/mail.png" alt="" />
                                            <div>이메일로 로그인하기</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            signStage === 2 && (
                                <div className="modal_box stage2">
                                    <div className="modal_header">
                                        <CloseIcon onClick={() => { setSignModal(false); setSignStage(1); }} />
                                        <div>로그인 또는 회원 가입</div>
                                    </div>
                                    <div className="modal_content">
                                        fefe
                                    </div>
                                </div>
                            )
                        }
                    </SignModal>
                )
            }
        </HeaderBox >
    );
};

export default withRouter(Header);