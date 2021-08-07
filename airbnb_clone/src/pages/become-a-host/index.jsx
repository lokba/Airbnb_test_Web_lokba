import React, { useState } from 'react';
import { BecomeHostBox } from './styled';
import { Link, withRouter } from 'react-router-dom';

const BecomeHostPage = () => {
    const [start, setStart] = useState(false);
    return (
        <BecomeHostBox>
            {
                !start &&
                <>
                    <div className="hostImg">
                        <img src="/images/become_host/img/main.jpg" alt="" />
                        <Link to="/" className="logo">
                            <img src="/images/icons/red_logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="hostBody">
                        <div className="tit">간단한 10단계로 호스팅<br />시작하기</div>
                        <div className="content">에어비앤비 호스트가 되어보세요. 에어비앤비에서 모든<br /> 과정을 도와드립니다.</div>
                        <div className="bar"></div>
                        <div className="startBtn" onClick={() => setStart(true)}>시작하기</div>
                        <Link to="/host/homes" className="exitBtn">나가기</Link>
                    </div>
                </>
            }
            {
                start &&
                <>
                </>
            }

        </BecomeHostBox >
    );
};

export default withRouter(BecomeHostPage);