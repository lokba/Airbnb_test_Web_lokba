import React from 'react';
import { HostPageBox } from './styled';
import { Link } from 'react-router-dom';

const HostPage = () => {
    return (
        <HostPageBox>
            <div className="hostTxt">
                <div>에어비앤비의<br /> 핵심을 이루는<br /> 호스팅</div>
                <Link to="/" className="logo">
                    <img src="/images/icons/red_logo.png" alt="" />
                </Link>
            </div>
            <div className="hostImg">
                <img src="/images/host/img/main.png" alt="" />
                <Link to="/become-a-host" className="startBtn">호스팅 시작하기</Link>
            </div>

        </HostPageBox>
    );
};

export default HostPage;