import React, { useEffect } from 'react';
import Footer from '../../components/common/footer';
import Header from '../../components/common/Header';
import HostingHeader from '../../components/common/HostingHeader';
import { HostingPageBox, MethodSection, ReserveSection, TodaySection } from './styled';

const HostingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <HostingPageBox>
            <HostingHeader />
            <TodaySection>
                <div className="tit">투데이</div>
                <div className="contentBox">
                    <div className="main">숙소에 관한 중요한 사항 확인하기</div>
                    <div className="sub">숙소 등록을 완료하려면 필수</div>
                </div>
            </TodaySection>
            <div className="hostingPageBody">
                <MethodSection>
                    <div className="tit">반갑습니다!</div>
                    <div className="sub">훌륭한 호스트가 되는 첫걸음을 내딛으셨네요. 호스팅 시작 방법을 알려드립니다.</div>
                    <div className="methodList">
                        <div className="methodItem">
                            <img src="/images/hosting/today_img1.jpeg" alt="" />
                            <div>첫 게스트 맞이할 준비하기</div>
                        </div>
                        <div className="methodItem">
                            <img src="/images/hosting/today_img2.jpeg" alt="" />
                            <div>달력과 요금 맞춤 설정하기</div>
                        </div>
                        <div className="methodItem">
                            <img src="/images/hosting/today_img3.jpeg" alt="" />
                            <div>게스트와 숙소 예약 방식 확인하기</div>
                        </div>
                    </div>
                </MethodSection>
                <ReserveSection>
                    <div className="tit">예약</div>
                    <div className="sub">게스트가 숙소를 예약하면<br />여기에 표시됩니다.</div>
                </ReserveSection>
            </div>
            <Footer />
        </HostingPageBox>
    );
};

export default HostingPage;