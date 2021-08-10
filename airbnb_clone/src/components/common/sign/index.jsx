import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import InputModel from '../InputBox';
import { ErrorMessage, SignBox, SubmitButton } from './styled';
import axios from 'axios';
import SignUpModal from '../signUpModal';

const SignModal = ({
    signStage,
    onCloseModal,
    setSignStage,
    error,
    clickStageTwoBtn,
    setClearSignUp,
}) => {
    const [signForm, setSignForm] = useState({
        email: "",
        name: "",
        BDay: "",
        password: "",
    });

    const onChange = (e) => {
        if (e.target.name === "BDay") {
            let value = e.target.value.split("-").join("");
            setSignForm({ ...signForm, [e.target.name]: value })
        }
        else {
            setSignForm({ ...signForm, [e.target.name]: e.target.value })
        }
    };

    const onClickSignUpBtn = () => {
        const signUp = async () => {
            // const response = await axios.post('https://dev.rodin.club/users', signForm);
            setClearSignUp(true);
        }

        signUp();
    }




    return (
        <SignBox>
            {
                signStage === 1 && (
                    <div className="modal_box stage1">
                        <div className="modal_header">
                            <CloseIcon className="closeIcon" onClick={onCloseModal} />
                            <div>로그인 또는 회원 가입</div>
                        </div>
                        <div className="stage1_content">
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
                            <CloseIcon className="closeIcon" onClick={onCloseModal} />
                            <div>로그인 또는 회원 가입</div>
                        </div>
                        <div className="stage2_content">
                            <div className="stage2_tit">에어비앤비에 오신 것을 환영합니다.</div>
                            <div className="inputBox">
                                <InputModel name="email" txt="이메일" onChange={onChange} signForm={signForm} />
                                {error && <ErrorMessage>{error}</ErrorMessage>}
                            </div>
                            <SubmitButton onClick={clickStageTwoBtn}>계속</SubmitButton>
                        </div>
                    </div>
                )
            }
            {
                //회원 가입이 되어 있는 상태일 경우 -> 비밀번호 입력하는 곳
                signStage === 3 && (
                    <div className="modal_box stage3">
                        <div className="modal_header">
                            <NavigateBeforeIcon className="beforeIcon" onClick={() => setSignStage(2)} />
                            <div>로그인</div>
                        </div>
                        <div className="stage3_content">
                            <div className="inputBox">
                                <InputModel name="password" txt="비밀번호" onChange={onChange} signForm={signForm} />
                                {error && <ErrorMessage>{error}</ErrorMessage>}
                            </div>
                            <SubmitButton>로그인</SubmitButton>
                        </div>
                    </div>
                )
            }
            {
                //회원 가입 하는 곳
                signStage === 4 && (
                    <div className="modal_box stage4">
                        <div className="modal_header">
                            <NavigateBeforeIcon className="beforeIcon" onClick={() => setSignStage(2)} />
                            <div>회원 가입 완료하기</div>
                        </div>
                        <div className="stage4_content">
                            <div className="inputBox">
                                <InputModel name="name" txt="이름(예: 홍길동)" onChange={onChange} signForm={signForm} />
                                <div className="notice">정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.</div>
                                <InputModel name="BDay" txt="생년월일" birth_date onChange={onChange} signForm={signForm} />
                                <div className="notice">만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 에어비앤비의 다른 회원에게 공개되지 않습니다.</div>
                                <InputModel name="email" txt="이메일" onChange={onChange} signForm={signForm} />
                                <div className="notice">예약 확인과 영수증을 이메일로 보내드립니다.</div>
                                <InputModel name="password" txt="비밀번호" onChange={onChange} signForm={signForm} />
                                <div className="notice">아래의 <em>동의 및 계속하기 버튼</em>을 선택하면, 에어비앤비의 <span>서비스 약관, 결제 서비스 약관, 개인정보 처리방침, 차별 금지 정책</span>에 동의하는 것입니다.</div>
                            </div>
                            {/* 우선은 일단 모달창 닫는걸로 구현 */}
                            <SubmitButton onClick={() => { onClickSignUpBtn(); onCloseModal(); }}>동의 및 계속하기</SubmitButton>
                        </div>
                    </div>
                )
            }
        </SignBox>
    );
};

export default SignModal;