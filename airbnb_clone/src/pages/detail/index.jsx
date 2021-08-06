import React from 'react';
import Footer from '../../components/common/footer';
import Header from '../../components/common/Header';
import { RoomDetailBox, RoomDetailHeader, RoomDetailImgBox, RoomDetailContent, RoomHosterInfo, RoomAboutInfo, RoomDetailInfo } from './styled';
import StarRateIcon from '@material-ui/icons/StarRate';
import PersonIcon from '@material-ui/icons/Person';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const RoomDetailPage = () => {
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


        }
    };


    return (
        <RoomDetailBox>
            <Header detail />
            <div className="RoomDetailBody">
                <RoomDetailHeader>
                    <div className="roomHeaderTit">{room.moto}</div>
                    <div className="roomHeaderBody">
                        <div className="roomHeaderInfo">
                            <div>
                                <StarRateIcon className="stress" />
                                <div className="grade">{room.star} <span className="comments">(후기 {room.comments}개)</span></div>
                            </div>
                            <div>∙</div>
                            <div>
                                <PersonIcon className="stress" />
                                <div>{room.hoster.grade}</div>
                            </div>
                            <div>∙</div>
                            <div className="locate">{room.location}</div>
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
                        <img src={room.imgURL[0]} alt="" />
                    </div>
                    <div className="subImg">
                        <div className="subImg_upper">
                            <img src={room.imgURL[1]} alt="" />
                            <img src={room.imgURL[2]} alt="" />
                        </div>
                        <div className="subImg_under">
                            <img src={room.imgURL[3]} alt="" />
                            <img src={room.imgURL[4]} alt="" />
                        </div>
                    </div>
                </RoomDetailImgBox>
                <RoomDetailContent>
                    <div className="content">
                        <RoomHosterInfo>
                            <div className="hosterInfo">{room.hoster.name}님이 호스팅하는 공동 주택 전체</div>
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
                    </div>
                    <div className="reservation">

                    </div>
                </RoomDetailContent>

            </div>
        </RoomDetailBox>
    );
};

export default RoomDetailPage;
