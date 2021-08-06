import React from 'react';
import Header from '../../components/common/Header';
import { BookChargeBox, BookInfoBox, BookPageBox, BookPageContent, BookPageHeader } from './styled';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { withRouter } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import StarRateIcon from '@material-ui/icons/StarRate';


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
        </BookPageBox >
    );
};

export default withRouter(BookPage);