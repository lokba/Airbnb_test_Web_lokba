import React, { useEffect, useState } from 'react';
import { HostPageBox } from './styled';
import { Link, withRouter } from 'react-router-dom';
import SignModal from '../../components/common/sign';

const HostPage = ({ history }) => {
    const [checkLogin, setCheckLogin] = useState(null);

    const [signStage, setSignStage] = useState(1);
    const [error, setError] = useState(false);
    const [signModal, setSignModal] = useState(false);


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

    //로그인이 되어있으면 chekcLogin => true.
    useEffect(() => {
        localStorage.getItem("ACCESS_TOKEN") ?
            setCheckLogin(true)
            :
            setCheckLogin(false);
    }, [checkLogin]);


    const onClickStartBtn = () => {
        checkLogin ? history.push('/become-a-host') : setSignModal(true);
    }

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
                    clickStageTwoBtn={clickStageTwoBtn} />
            }

        </HostPageBox>
    );
};

export default withRouter(HostPage);