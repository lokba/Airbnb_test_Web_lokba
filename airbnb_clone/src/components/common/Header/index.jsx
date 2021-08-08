import React, { useEffect, useState } from 'react';
import { HeaderBox } from './styled';
import { BiSearch } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { Link, withRouter } from 'react-router-dom';
import SignModal from '../sign';

const Header = ({ match, flex_search, local_area, travel, detail, book, hosting }) => {

    const [onProfile, setOnProfile] = useState(false);
    const [signModal, setSignModal] = useState(false);
    const [signStage, setSignStage] = useState(1);
    const [error, setError] = useState(false);

    const [checkLogin, setCheckLogin] = useState(false);

    useEffect(() => {
        localStorage.getItem("ACCESS_TOKEN") ?
            setCheckLogin(true)
            :
            setCheckLogin(false);
    }, [checkLogin]);

    const onLogout = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        setCheckLogin(false);
    };

    const clickStageTwoBtn = () => {
        const email = document.querySelector(".email");

        if (email.value.length === 0) {
            setError("*이메일이 필요합니다.");
        }
        else {
            setSignStage(4);
            setError(false);
        }
    }

    const onCloseModal = () => {
        setSignModal(false);
        setSignStage(1);
        setError(false);
    }

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
        <HeaderBox
            className="headerBox"
            local_area={local_area}
            travel={travel}
            detail={detail}
            book={book}
        >
            <Link to="/" className="logoArea">
                <img className="logoImg" src="/images/icons/red_logo.png" alt="" />
                <div className="logoTxt">airbnb</div>
            </Link>
            {
                (flex_search || hosting) ?
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
                            <div className={book ? "inputArea book" : "inputArea"}>
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

            <div className={book ? "infoArea book" : "infoArea"} >
                <Link to="/host/homes" className="info_host">호스트 되기</Link>
                <div className="info_lang">
                    <MdLanguage />
                </div>
                <div className="info_profile">
                    <div className="profile_box" onClick={() => setOnProfile(!onProfile)}>
                        <IoIosMenu />
                        <img src="/images/icons/profile.png" alt="" />
                    </div>

                    {
                        onProfile &&
                        (checkLogin ?
                            (
                                <div className="profile_option">
                                    <div className="stress" >위시 리스트</div>
                                    <span className="bar"></span>
                                    <Link to="/host/homes">숙소 호스팅 되기</Link>
                                    <div>프로필 관리</div>
                                    <span className="bar"></span>
                                    <div className="help">도움말</div>
                                    <div className="logout" onClick={() => { onLogout(); setOnProfile(!onProfile) }}>로그아웃</div>
                                </div>
                            )
                            :
                            (
                                <div className="profile_option">
                                    <div className="stress" onClick={() => { setSignModal(true); setOnProfile(!onProfile) }}>로그인</div>
                                    <div className="register" onClick={() => { setSignModal(true); setOnProfile(!onProfile) }}>회원가입</div>
                                    <span className="bar"></span>
                                    <div className="host">숙소 호스트 되기</div>
                                    <div className="help">도움말</div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            {
                signModal && (
                    <SignModal
                        signStage={signStage}
                        onCloseModal={onCloseModal}
                        setSignStage={setSignStage}
                        error={error}
                        clickStageTwoBtn={clickStageTwoBtn}
                    />
                )
            }
        </HeaderBox >
    );
};

export default withRouter(Header);


//inputBox 수정하기


