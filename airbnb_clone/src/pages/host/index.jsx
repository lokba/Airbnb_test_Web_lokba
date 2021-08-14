import React, { useEffect, useState } from 'react';
import { HostPageBox } from './styled';
import { Link, withRouter } from 'react-router-dom';
import SignModal from '../../components/common/sign';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getUserId } from '../../store/userInfo';

const HostPage = ({ history }) => {
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
        localStorage.getItem("ACCESS_TOKEN") ?
            setCheckLogin(true) : setCheckLogin(false);

        localStorage.getItem("HOST_ACCESS_TOKEN") ?
            setCheckHost(true) : setCheckHost(false);
    }, [checkLogin]);

    const onCloseModal = () => {
        setSignModal(false);
        setSignStage(1);
        setError(false);
        initSignForm();
    }

    const onClickStartBtn = () => checkLogin ? history.push('/become-a-host') : setSignModal(true);

    return (
        <HostPageBox>
            <div className="hostTxt">
                <div>에어비앤비의<br /> 핵심을 이루는<br /> 호스팅</div>
                <Link to="/" className="logo">
                    <img src="/images/icons/red_logo.png" alt="" />
                </Link>
            </div>
            <div className="hostImg">
                <img src="/images/host/img/sub.jpg" alt="" />
                <div className="startBtn" onClick={onClickStartBtn}>호스팅 시작하기</div>
            </div>
            {
                signModal && <SignModal
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
            }
        </HostPageBox>
    );
};

export default withRouter(HostPage);