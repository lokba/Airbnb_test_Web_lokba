import React from 'react';
import Header from '../../components/common/Header';
import { BookChargeBox, BookInfoBox, BookPageBox, BookPageContent, BookPageHeader } from './styled';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { withRouter } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import StarRateIcon from '@material-ui/icons/StarRate';
import Footer from '../../components/common/footer';


const BookPage = ({ history }) => {
    const room = {
        imgURL: ["/images/local/area/area1.png",
            "/images/local/area/area2.png",
            "/images/local/area/area3.png",
            "/images/local/area/area4.png"
            , "/images/local/area/area5.png"],
        sector: "강남의 공동 주택 전체",
        moto: "S2 Clean & cozy room right next to Gangnam Station",
        info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
        star: "4.74",
        comments: "54",
        heart: false,
        roomId: 1,
        location: "강남구,서울,한국",
        hoster: {
            grade: "슈퍼호스트",
            name: "Bella",
        },
    };

    return (
        <BookPageBox>
            <Header book />
            <div className="bookPageBody">
                <BookPageHeader>
                    <div className="icon" onClick={() => history.goBack()}><NavigateBeforeIcon /></div>
                    <div className="tit">확인 및 결제</div>
                </BookPageHeader>
                <BookPageContent>
                    <BookInfoBox>
                        <div className="tit">예약 정보</div>
                        <div className="bookInfoList">
                            <div className="bookInfoItem">
                                <div className="itemTit">
                                    <div>날짜</div>
                                    <div className="modify">수정</div>
                                </div>
                                <div className="itemValue">2022년 1월 11일 - 2022년 1월 13일</div>
                            </div>
                            <div className="bookInfoItem">
                                <div className="itemTit">
                                    <div>게스트</div>
                                    <div className="modify">수정</div>
                                </div>
                                <div className="itemValue">게스트 1명</div>
                            </div>
                        </div>
                        <div className="refund">
                            <div className="refund_tit">환불 정책</div>
                            <div className="detail_charge">
                                <span>2월 15일 3:00 PM 전까지 무료로 예약을 취소할 수 있습니다.</span> 그 후에는 2월 20일 3:00 PM 전에 예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한 요금의 50%가 환불됩니다. <u>자세히 알아보기</u>
                            </div>
                            <div className="detail_corona">
                                코로나19로 인한 여행 문제에는 정상참작이 가능한 상황 정책이 적용되지 않습니다. <u>자세히 알아보기</u>
                            </div>
                        </div>
                        <div className="notice">
                            아래 버튼을 선택하면, <span>숙소 이용규칙,안전 정보 공개,에어비앤비의 사회적 거리 두기 및 기타 코로나19 관련 가이드라인,환불 정책,</span> 및 <span>게스트 환불 정책</span>에 동의하는 것입니다. 또한 <span>숙박세</span> 및 서비스 수수료를 포함하여 표시된 총 금액에 동의합니다. 에어비앤비는 이제 이 지역에서 정부가 부과한 숙박세를 징수하여 납부합니다.
                        </div>
                        <div className="submitBtn">확인 및 결제</div>
                    </BookInfoBox>
                    <BookChargeBox>
                        <div className="chargeBox">
                            <div className="roomInfo">
                                <div className="roomImg">
                                    <img src={room.imgURL[0]} alt="" />
                                </div>
                                <div className="roomContent">
                                    <div className="sector">{room.sector}</div>
                                    <div className="moto">{room.moto}</div>
                                    <div className="info">{room.info[0]}</div>
                                    <div className="grade">
                                        <StarRateIcon />
                                        <div className="star">{room.star} <span>(후기 {room.comments}개)</span></div>
                                        <PersonIcon />
                                        <div className="kind">{room.hoster.grade}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="chargeTit">요금 세부정보</div>
                            <div className="chargeItem">
                                <div>₩73,000 × 2박</div>
                                <div>₩146,000</div>
                            </div>
                            <div className="chargeItem">
                                <div className="under">청소비</div>
                                <div>₩30,000</div>
                            </div>
                            <div className="chargeItem">
                                <div className="under">서비스 수수료</div>
                                <div>₩24,847</div>
                            </div>
                            <div className="chargeItem">
                                <div className="under">숙박세와 수수료</div>
                                <div>₩2,485</div>
                            </div>
                            <div className="chargeItem total">
                                <div>총 합계 <span className="under">(KRW)</span></div>
                                <div>₩203,332</div>
                            </div>
                        </div>
                    </BookChargeBox>

                </BookPageContent>
            </div>
            <Footer reserve="reserve" />
        </BookPageBox >
    );
};

export default withRouter(BookPage);