import React, { useEffect, useState } from 'react';
import { HeaderBox } from './styled';
import { BiSearch } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { Link, withRouter } from 'react-router-dom';
import SignModal from '../sign';
import SignUpModal from '../signUpModal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId, getUserInfo } from '../../../store/userInfo';

const Header = ({ match, flex_search, local_area, travel, detail, book, hosting, profile }) => {

    const [onProfile, setOnProfile] = useState(false);
    const [signModal, setSignModal] = useState(false);
    const [signStage, setSignStage] = useState(1);
    const [error, setError] = useState(false);

    const [checkLogin, setCheckLogin] = useState(false);
    const [checkHost, setCheckHost] = useState(false);

    const [clearSignUp, setClearSignUp] = useState(false);

    const [checkUser, setCheckUser] = useState(false);

    const [signForm, setSignForm] = useState({
        email: "",
        name: "",
        BDay: "",
        password: "",
    });

    const { userId, userData } = useSelector(({ userInfo }) => ({
        userId: userInfo.userIdx,
        userData: userInfo.userData,
    }));

    const dispatch = useDispatch();


    const initSignForm = () => {
        setSignForm({
            email: "",
            name: "",
            BDay: "",
            password: "",
        });
    }

    //회원 가입 api 
    const onClickSignUpBtn = () => {
        const signUp = async () => {
            await axios.post('https://dev.rodin.club/users', signForm);
            setClearSignUp(true);
        }
        signUp();
        initSignForm();
    }

    const onChange = (e) => {
        if (e.target.name === "BDay") {
            let value = e.target.value.split("-").join("");
            setSignForm({ ...signForm, [e.target.name]: value })
        }
        else {
            setSignForm({ ...signForm, [e.target.name]: e.target.value })
        }
    };


    // 이메일 존재 확인 api
    const clickStageTwoBtn = () => {
        const email = document.querySelector(".email");
        setCheckUser(false);

        if (email.value.length === 0) {
            setError("*이메일이 필요합니다.");
        }
        else {
            const checkEmail = async () => {
                const response = await axios.get("https://dev.rodin.club/users");

                let userInfo = response.data.result.filter(v =>
                    (v.userEmail === email.value));

                userInfo.length !== 0 ? setSignStage(3) : setSignStage(4);
            }
            checkEmail();
            setError(false);
        }
    }

    //로그인 api
    const onClickSignIn = () => {
        const email = signForm.email;
        const password = signForm.password;

        const signIn = async () => {
            try {
                const response = await axios.post('https://dev.rodin.club/users/login', { email, password });

                //성공적으로 되었을 때
                if (response.data.code === 1000) {
                    localStorage.setItem('ACCESS_TOKEN', response.data.result.jwt);
                    dispatch(getUserId(response.data.result.userIdx));
                    setSignModal(false);
                    setCheckLogin(true);
                    initSignForm();
                    setSignStage(1);
                }
            }
            catch (e) {
                console.log(e);
            }

        }
        signIn();
    }

    useEffect(() => {
        if (!userData) {
            console.log("fefe");
        }
        if (!userData && checkLogin) {
            const headers = {
                "x-access-token": localStorage.getItem('ACCESS_TOKEN')
            };
            const loadUser = async () => {
                const response = await axios.get(`https://dev.rodin.club/users/${userId}`, { headers });
                dispatch(getUserInfo(response.data.result));
            }
            loadUser();
        }

    }, [userId, dispatch, userData, checkLogin]);



    useEffect(() => {
        localStorage.getItem("ACCESS_TOKEN") ?
            setCheckLogin(true)
            :
            setCheckLogin(false);


        if (userData) {
            userData.userHost === "FALSE" ? setCheckHost(false) : setCheckHost(true);
        }

    }, [checkLogin, userData, checkHost]);


    const onLogout = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        setCheckLogin(false);
    };



    const onCloseModal = () => {
        setSignModal(false);
        setSignStage(1);
        setError(false);
        initSignForm();
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
                (flex_search || hosting || profile) ?
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
                {
                    (checkLogin && checkHost) ?
                        (<Link to="/hosting" className="info_host">호스트 모드로 전환</Link>)
                        :
                        (<Link to="/host/homes" className="info_host">호스트 되기</Link>)
                }
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
                                    {
                                        checkHost ?
                                            (
                                                // 추후에 마이 숙소 페이지 구현시 연결
                                                <Link to="/hosting">숙소 관리</Link>
                                            )
                                            :
                                            (
                                                <Link to="/host/homes">숙소 호스팅 되기</Link>
                                            )
                                    }
                                    <Link to="/profile">프로필 관리</Link>
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
                                    <Link to="/host/homes" className="host">숙소 호스트 되기</Link>
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
                        setClearSignUp={setClearSignUp}
                        checkUser={checkUser}
                        clickStageTwoBtn={clickStageTwoBtn}
                        onChange={onChange}
                        onClickSignUpBtn={onClickSignUpBtn}
                        signForm={signForm}
                        onClickSignIn={onClickSignIn}
                    />
                )
            }
            {
                clearSignUp && <SignUpModal setClearSignUp={setClearSignUp} />
            }
        </HeaderBox >
    );
};

export default withRouter(Header);


//inputBox 수정하기


