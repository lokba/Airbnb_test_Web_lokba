import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import { BookChargeBox, BookInfoBox, BookPageBox, BookPageContent, BookPageHeader } from './styled';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Link, withRouter } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import StarRateIcon from '@material-ui/icons/StarRate';
import Footer from '../../components/common/footer';
import axios from 'axios';
import { useSelector } from 'react-redux';


const BookPage = ({ history, match }) => {

    const [roomIdx, setRoomIdx] = useState(null);
    const [roomDetailInfo, setRoomDetailInfo] = useState(null);
    const [day, setDay] = useState(null);

    const { checkin, checkout, capacity } = useSelector(({ reserveInfo }) => ({
        checkin: reserveInfo.checkin,
        checkout: reserveInfo.checkout,
        capacity: reserveInfo.capacity,
    }));

    useEffect(() => {
        setRoomIdx(match.params.roomId)
    }, [match.params.roomId]);

    useEffect(() => {
        setDay(Number(checkout.split("-").join("")) - Number(checkin.split("-").join("")));
    }, [])



    useEffect(() => {
        const onLoadRoom = async () => {
            const response = await axios.get(`https://dev.rodin.club/rooms/${roomIdx}`);
            console.log(response.data);
            setRoomDetailInfo(response.data.result);
        }
        roomIdx && onLoadRoom();
    }, [roomIdx]);

    const insertDot = (str) => {
        if (str.length <= 3) {
            return str;
        }
        return insertDot(str.slice(0, str.length - 3)) + ',' + str.slice(str.length - 3);
    }


    // useEffect(() => {
    //     window.scrollTo(0,0);
    // }, []);

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
        <>
            {
                roomDetailInfo && (
                    <BookPageBox>
                        <Header book />
                        <div className="bookPageBody">
                            <BookPageHeader>
                                <Link to={`/rooms/${roomIdx}`} className="icon"><NavigateBeforeIcon /></Link>
                                <div className="tit">확인 및 결제</div>
                            </BookPageHeader>
                            <BookPageContent>
                                <BookInfoBox>
                                    <div className="tit">예약 정보</div>
                                    <div className="bookInfoList">
                                        <div className="bookInfoItem">
                                            <div className="itemTit">
                                                <div>날짜</div>
                                                {/* <div className="modify">수정</div> */}
                                            </div>
                                            <div className="itemValue">{checkin} ~ {checkout}</div>
                                        </div>
                                        <div className="bookInfoItem">
                                            <div className="itemTit">
                                                <div>게스트</div>
                                                {/* <div className="modify">수정</div> */}
                                            </div>
                                            <div className="itemValue">{capacity}</div>
                                        </div>
                                    </div>
                                    <div className="refund">
                                        <div className="refund_tit">환불 정책</div>
                                        <div className="detail_charge">
                                            <span>예약 한달 전까지 무료로 예약을 취소할 수 있습니다.</span> 그 후에는 예약 2주 전에 예약을 취소하면 첫 1박 요금 및 서비스 수수료를 제외한 요금의 50%가 환불됩니다. <u>자세히 알아보기</u>
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
                                                <img src={roomDetailInfo.roomImageUrl} alt="" />
                                            </div>
                                            <div className="roomContent">
                                                <div className="sector">{roomDetailInfo.roomLocation}의 {roomDetailInfo.roomDesc}</div>
                                                <div className="moto">{roomDetailInfo.roomName}</div>
                                                <div className="info">최대 인원 {roomDetailInfo.roomCapacity}명 • 침실 {roomDetailInfo.roomBedroom}개 • 침대 {roomDetailInfo.roomBed}개 • 욕실 {roomDetailInfo.roomBathroom}개</div>
                                                <div className="grade">
                                                    <StarRateIcon />
                                                    <div className="star">5.00 <span>(후기 6개)</span></div>
                                                    <PersonIcon />
                                                    <div className="kind">{room.hoster.grade}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="chargeTit">요금 세부정보</div>
                                        <div className="chargeItem">
                                            <div>₩{insertDot(String(roomDetailInfo.roomPrice))} × {day}박</div>
                                            <div>₩{insertDot(String(roomDetailInfo.roomPrice * day))}</div>
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
                                            <div>₩{insertDot(String(roomDetailInfo.roomPrice * day + 57332))}</div>
                                        </div>
                                    </div>
                                </BookChargeBox>

                            </BookPageContent>
                        </div>
                        <Footer reserve="reserve" />
                    </BookPageBox >
                )
            }
        </>

    );
};

export default withRouter(BookPage);