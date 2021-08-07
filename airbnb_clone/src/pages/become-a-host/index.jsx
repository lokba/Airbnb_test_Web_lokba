import React, { useEffect, useState } from 'react';
import { BecomeHostBox, HostIntroBox, HostStageBox } from './styled';
import { Link, withRouter } from 'react-router-dom';

const BecomeHostPage = () => {
    const [start, setStart] = useState(false);
    const [stage1, setStage1] = useState(null);
    const [curStage, setCurStage] = useState(null);

    // useEffect(() => {
    //     setStart(true);
    //     // 임시로 방편
    // }, []);


    return (
        <BecomeHostBox>
            {
                !start &&
                <HostIntroBox>
                    <div className="host_intro_img">
                        <img src="/images/become_host/img/main.jpg" alt="" />
                        <Link to="/" className="logo">
                            <img src="/images/icons/red_logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="host_intro_body">
                        <div className="tit">간단한 10단계로 호스팅<br />시작하기</div>
                        <div className="content">에어비앤비 호스트가 되어보세요. 에어비앤비에서 모든<br /> 과정을 도와드립니다.</div>
                        <div className="btn">
                            <div className="startBtn" onClick={() => { setStart(true); setCurStage(1) }}>시작하기</div>
                        </div>
                        <Link to="/host/homes" className="exitBtn">나가기</Link>
                    </div>
                </HostIntroBox>
            }
            {
                start &&
                <HostStageBox>
                    <div className="host_stage_img">
                        <div className="stage_tit">
                            호스팅할 숙소 유형을<br /> 알려주세요.
                        </div>
                        <Link to="/" className="logo">
                            <img src="/images/favicon/favicon.png" alt="" />
                        </Link>
                    </div>


                    <div className="host_stage_body">
                        {
                            curStage === 1 && (
                                <>
                                    <div className="opt_list">
                                        <div className={stage1 === 0 ? "opt stage1_on" : "opt"} onClick={() => setStage1(0)}>
                                            <div className="opt_tit">아파트</div>
                                            <img src="/images/become_host/stage1/room1.png" alt="" />
                                        </div>
                                        <div className={stage1 === 1 ? "opt stage1_on" : "opt"} onClick={() => setStage1(1)}>
                                            <div className="opt_tit">주택</div>
                                            <img src="/images/become_host/stage1/room2.png" alt="" />
                                        </div>
                                        <div className={stage1 === 2 ? "opt stage1_on" : "opt"} onClick={() => setStage1(2)}>
                                            <div className="opt_tit">별채</div>
                                            <img src="/images/become_host/stage1/room3.png" alt="" />
                                        </div>
                                        <div className={stage1 === 3 ? "opt stage1_on" : "opt"} onClick={() => setStage1(3)}>
                                            <div className="opt_tit">독특한 숙소</div>
                                            <img src="/images/become_host/stage1/room4.png" alt="" />
                                        </div>
                                        <div className={stage1 === 4 ? "opt stage1_on" : "opt"} onClick={() => setStage1(4)}>
                                            <div className="opt_tit">B&B</div>
                                            <img src="/images/become_host/stage1/room5.png" alt="" />
                                        </div>
                                        <div className={stage1 === 5 ? "opt stage1_on" : "opt"} onClick={() => setStage1(5)}>
                                            <div className="opt_tit">부티크 호텔</div>
                                            <img src="/images/become_host/stage1/room6.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="btn">
                                        <div className="beforeBtn" onClick={() => setStart(false)}>뒤로</div>
                                        <div className="nextBtn" onClick={() => setCurStage(2)}>다음</div>
                                    </div>
                                </>
                            )
                        }
                        {
                            curStage === 2 &&
                            (
                                <>

                                </>
                            )

                        }
                        <Link to="/host/homes" className="exitBtn">나가기</Link>
                    </div>
                </HostStageBox>
            }

        </BecomeHostBox >
    );
};

export default withRouter(BecomeHostPage);