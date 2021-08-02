import React from 'react';
import { FooterBox } from './styled';

const Footer = () => {
    return (
        <FooterBox>
            <div className="content">
                <div className="content_item">
                    <span className="content_item_tit">소개</span>
                    <div>에어비앤비 이용 방법</div>
                    <div>뉴스룸</div>
                    <div>에어비앤비 2021</div>
                    <div>투자자 정보</div>
                    <div>에어비앤비 플러스</div>
                    <div>에어비앤비 Luxe</div>
                    <div>호텔투나잇</div>
                    <div>에어비앤비 비즈니스 프로그램</div>
                    <div>호스트 분들이 있기에 가능합니다</div>
                    <div>채용정보</div>
                    <div>창립자 편지</div>
                </div>
                <div className="content_item">
                    <span className="content_item_tit">커뮤니티</span>
                    <div>다양성 및 소속감</div>
                    <div>접근성</div>
                    <div>에어비앤비 어소시에이트</div>
                    <div>구호 인력을 위한 숙소</div>
                    <div>게스트 추천</div>
                    <div>Airbnb.org</div>
                </div>
                <div className="content_item">
                    <span className="content_item_tit">호스팅하기</span>
                    <div>숙소 호스팅</div>
                    <div>온라인 체험 호스팅하기</div>
                    <div>체험 호스팅하기</div>
                    <div>책임감 있는 호스팅</div>
                    <div>자료 센터</div>
                    <div>커뮤니티 센터</div>
                </div>
                <div className="content_item">
                    <span className="content_item_tit">에어비앤비 지원</span>
                    <div>에어비앤비의 코로나19 대응 방안</div>
                    <div>도움말 센터</div>
                    <div>예약 취소 옵션</div>
                    <div>에어비앤비 이웃 민원 지원</div>
                    <div>신뢰와 안전</div>
                </div>
            </div>
            <div className="copyright">
                <div className="company">© 2021 Airbnb, Inc.</div>
                <div className="copyright_list">
                    <div>·</div>
                    <div className="txt">개인정보 처리방침</div>
                </div>
                <div className="copyright_list">
                    <div>·</div>
                    <div className="txt">이용약관</div>
                </div>
                <div className="copyright_list">
                    <div>·</div>
                    <div className="txt">사이트맵</div>
                </div>
                <div className="copyright_list">
                    <div>·</div>
                    <div className="txt">한국의 변경된 환불 정책</div>
                </div>
                <div className="copyright_list">
                    <div>·</div>
                    <div className="txt">회사 세부정보</div>
                </div>
            </div>
        </FooterBox >
    );
};

export default Footer;