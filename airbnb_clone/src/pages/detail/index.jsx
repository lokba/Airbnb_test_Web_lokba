import React, { useEffect, useState } from 'react';
import Footer from '../../components/common/footer';
import Header from '../../components/common/Header';
import { RoomDetailBox, RoomDetailHeader, RoomDetailImgBox, RoomDetailContent, RoomHosterInfo, RoomAboutInfo, RoomDetailInfo, RoomPlace, RoomFacility, RoomCheckIn, ReservationBox, CommentBox, HostingMap } from './styled';
import StarRateIcon from '@material-ui/icons/StarRate';
import PersonIcon from '@material-ui/icons/Person';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const RoomDetailPage = ({ history, match }) => {
    const [roomIdx, setRoomIdx] = useState(null);
    const [roomDetailInfo, setRoomDetailInfo] = useState(null);

    useEffect(() => {
        setRoomIdx(match.params.roomId);
    }, [match.params.roomId]);

    useEffect(() => {
        const onLoadRoom = async () => {
            const response = await axios.get(`https://dev.rodin.club/rooms/${roomIdx}`);
            console.log(response.data);
            setRoomDetailInfo(response.data.result);
        }

        roomIdx && onLoadRoom();
    }, [roomIdx]);

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
        commentList: [
            {
                writer: "다미",
                date: "2021년 6월",
                comment: "모든 것이 완벽했던",
            },
            {
                writer: "준영",
                date: "2021년 3월",
                comment: "좋은 가격에 하루 잘 쉬다가 갑니다. 깔끔하고 위치도 좋고 정말 최고",
            },
            {
                writer: "정민",
                date: "2021년 3월",
                comment: "조용하고 깨끗해요. 강남 한복판 도심이지만 조용하고 편안하게 지낼 수 있었어요",
            },
            {
                writer: "미경",
                date: "2021년 3월",
                comment: "위치가 강남역 바로앞이고 무엇보다 트인 전망이 너무좋은 숙소였어요",
            },
            {
                writer: "Lee",
                date: "2020년 12월",
                comment: "숙소가 예쁘고 위치도 좋아서 아예 살고 싶어지네요 조용합니다 만족하네요",
            },
            {
                writer: "재민",
                date: "2020년 12월",
                comment: "굿",
            },
        ]
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // const reserveBox = document.querySelector(".reservation");

    // window.addEventListener("scroll", () => {

    // });


    return (
        <RoomDetailBox>
            <Header detail />
            <div className="RoomDetailBody">
                <RoomDetailHeader>
                    <div className="roomHeaderTit">{roomDetailInfo.roomName}</div>
                    <div className="roomHeaderBody">
                        <div className="roomHeaderInfo">
                            <div>
                                <StarRateIcon className="stress" />
                                {/* <div className="grade">{room.star} <span className="comments">(후기 {room.comments}개)</span></div> */}
                                <div className="grade">0.00 <span className="comments">(후기 0개)</span></div>
                            </div>
                            <div>∙</div>
                            <div>
                                <PersonIcon className="stress" />
                                {/* <div>{room.hoster.grade}</div> */}
                                <div>일반호스트</div>
                            </div>
                            <div>∙</div>
                            <div className="locate">{roomDetailInfo.roomLocation}</div>
                        </div>

                        <div className="accessBtn">
                            <div className="share btn">
                                <ShareIcon />
                                <div>공유하기</div>
                            </div>
                            <div className="store btn">
                                <FavoriteBorderIcon />
                                <div>저장</div>
                            </div>
                        </div>
                    </div>
                </RoomDetailHeader>
                <RoomDetailImgBox>
                    <div className="mainImg">
                        {/* <img src={room.imgURL[0]} alt="" /> */}
                        <img src={roomDetailInfo.roomImageUrl} alt="" />
                    </div>
                    <div className="subImg">
                        <div className="subImg_upper">
                            {/* <img src={room.imgURL[0]} alt="" /> */}
                            <img src={roomDetailInfo.roomImageUrl} alt="" />
                            <img src={roomDetailInfo.roomImageUrl} alt="" />
                        </div>
                        <div className="subImg_under">
                            <img src={roomDetailInfo.roomImageUrl} alt="" />
                            <img src={roomDetailInfo.roomImageUrl} alt="" />
                        </div>
                    </div>
                </RoomDetailImgBox>
                <RoomDetailContent>
                    <div className="content">
                        <RoomHosterInfo>
                            <div className="hosterInfo">{room.hoster.name}님이 호스팅하는 {roomDetailInfo.roomKind} 전체</div>
                            <div className="roomInfo">{room.info[0]}</div>
                        </RoomHosterInfo>
                        <RoomAboutInfo>
                            <div className="aboutItem">
                                <div className="info_img">
                                    <img className="house" src="/images/detail/icons/home.png" alt="" />
                                </div>
                                <div className="info_content">
                                    <div className="list_tit">집 전체</div>
                                    <div className="list_txt">아파트 전체를 단독으로 사용하시게 됩니다.</div>
                                </div>
                            </div>
                            <div className="aboutItem">
                                <div className="info_img">
                                    <img className="clean" src="/images/detail/icons/clean.png" alt="" />
                                </div>
                                <div className="info_content">
                                    <div className="list_tit">청결 강화</div>
                                    <div className="list_txt">에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다. <span>더 보기</span></div>
                                </div>
                            </div>
                            <div className="aboutItem">
                                <div className="info_img">
                                    <img className="checkin" src="/images/detail/icons/checkin.png" alt="" />
                                </div>
                                <div className="info_content">
                                    <div className="list_tit">셀프 체크인</div>
                                    <div className="list_txt">키패드를 이용해 체크인하세요.</div>
                                </div>
                            </div>
                            <div className="aboutItem">
                                <div className="info_img">
                                    <img className="medal" src="/images/detail/icons/medal.png" alt="" />
                                </div>
                                <div className="info_content">
                                    <div className="list_tit">{room.hoster.name}님은 슈퍼호스트입니다.</div>
                                    <div className="list_txt">슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.</div>
                                </div>
                            </div>
                        </RoomAboutInfo>
                        <RoomDetailInfo>
                            <div className="location">강남역 1번 출구 바로 옆 편리하고 깔끔한 숙소입니다.</div>
                            <div className="detailInfo">
                                <div>- 전철까지 도보 30초</div>
                                <div>- 침구로 매번 깨끗이 교체</div>
                                <div>- 코너창층으로 좋은 전망</div>
                                <div>- 세탁기 + 건조기</div>
                                <div>- 지하창고에 짐 보관 무료</div>
                                <div>- 주차는 1시간에 1000원으로 꼭 미리 문의 주셔야합니다</div>
                                <div>- 정말 좋은 헬스장 도보 3분 (하루 만원)</div>
                            </div>
                        </RoomDetailInfo>
                        <RoomPlace>
                            <div className="tit">숙박 장소</div>
                            <div className="content">
                                <img src="/images/detail/icons/bed.png" alt="" />
                                <div className="content_tit">1번 침실</div>
                                <div className="content_sub">퀸사이즈 침대 1개, 요와 이불 1개</div>
                            </div>
                        </RoomPlace>
                        <RoomFacility>
                            <div className="tit">숙박 편의시설</div>
                            <div className="content">
                                <li>주방</li>
                                <li>무선 인터넷</li>
                                <li>TV + 일반 케이블 TV</li>
                                <li>엘리베이터</li>
                                <li>세탁기</li>
                                <div className="seeAllBtn">편의시설 35개 모두 보기</div>
                            </div>
                        </RoomFacility>
                        <RoomCheckIn>
                            <div className="tit">체크인 날짜를 선택해주세요.</div>
                            <div className="sub">여행 날짜를 입력하여 정확한 요금을 확인하세요.</div>
                        </RoomCheckIn>
                    </div>
                    <div className="reservation">
                        <ReservationBox>
                            <div className="tit">요금을 확인하려면 날짜를<br />입력하세요.</div>
                            <div className="sub">
                                <StarRateIcon />
                                <div>{room.star}<span>(후기 {room.comments}개)</span></div>
                            </div>
                            <div className="reserveBox">
                                <div className="checkInOut">
                                    <div className="checkIn">
                                        <div className="opt_tit">체크인</div>
                                        <div className="opt_txt">날짜 추가</div>
                                    </div>
                                    <div className="checkOut">
                                        <div className="opt_tit" >체크아웃</div>
                                        <div className="opt_txt">날짜 추가</div>
                                    </div>
                                </div>
                                <div className="guest">
                                    <div className="opt_tit">인원</div>
                                    <div className="opt_txt">게스트 1명</div>
                                    <KeyboardArrowDownIcon />
                                </div>
                            </div>
                            <div className="reserveBtn" onClick={() => history.push(`/book/${room.roomId}`)}>예약 가능 여부 보기</div>
                        </ReservationBox>
                    </div>
                </RoomDetailContent>

                <CommentBox>
                    <div className="grade">
                        <StarRateIcon />
                        <div>{room.star}</div>
                        <div>∙</div>
                        <div>후기 {room.comments}개</div>
                    </div>

                    <div className="commentList">
                        {
                            room.commentList.map(v => (
                                <div className="commentItem">
                                    <div className="header">
                                        <div className="profile">
                                            <img src="/images/icons/profile.png" alt="" />
                                        </div>
                                        <div className="writer">
                                            <div className="name">{v.writer}</div>
                                            <div className="date">{v.date}</div>
                                        </div>
                                    </div>
                                    <div className="txt">
                                        <div>{v.comment}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="seeAllBtn">후기 {room.comments}개 모두 보기</div>
                </CommentBox>
                <HostingMap>
                    <div className="tit">호스팅 지역</div>
                    <div className="location">강남구, 서울, 한국</div>
                </HostingMap>

            </div >
            <Footer detail="detail" />
        </RoomDetailBox >
    );
};

export default withRouter(RoomDetailPage);
