import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HeaderBox } from './styled';

const HostingHeader = ({ history }) => {
    const [onProfile, setOnProfile] = useState(false);

    const onLogout = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        history.push('/');
    };

    //비 리그인 상태에서 hosting 페이지 접근시, 메인 페이지로 전환.
    useEffect(() => {
        if (!localStorage.getItem("ACCESS_TOKEN")) {
            history.push('/');
        }
    }, [history]);

    return (
        <HeaderBox>
            <Link to="/" className="logoArea">
                <img className="logoImg" src="/images/icons/red_logo.png" alt="" />
            </Link>
            <div className="infoArea" >
                <div className="info_profile">
                    <div className="profile_box" onClick={() => setOnProfile(!onProfile)}>
                        <img src="/images/icons/profile.png" alt="" />
                    </div>
                    {
                        onProfile &&
                        <div className="profile_option">
                            <Link to="/profile" className="stress" >프로필 관리</Link>
                            <Link to="/hosting/listings">나의 숙소</Link>
                            <span className="bar"></span>
                            <div>한국어 (KR)</div>
                            <div>₩ KRW</div>
                            <span className="bar"></span>
                            <Link to="/">게스트 모드로 전환</Link>
                            <div className="logout" onClick={() => { onLogout(); setOnProfile(!onProfile) }}>로그아웃</div>
                        </div>
                    }
                </div>
            </div>
        </HeaderBox >
    );
};

export default withRouter(HostingHeader);