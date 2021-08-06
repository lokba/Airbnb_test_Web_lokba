import React from 'react';
import Footer from '../../components/common/footer';
import Header from '../../components/common/Header';
import { RoomDetailBox, RoomDetailHeader } from './styled';
import StarRateIcon from '@material-ui/icons/StarRate';
import PersonIcon from '@material-ui/icons/Person';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const RoomDetailPage = () => {
    const room = {
        imgURL: "/images/local/area/area1.png",
        sector: "강남의 공동 주택 전체",
        moto: "S2 Clean & cozy room right next to Gangnam Station",
        info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
        star: "4.74",
        comments: "54",
        heart: false,
        roomId: 1,
        location: "강남구,서울,한국",
        seller: {
            grade: "슈퍼호스트"
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
                                <div>{room.seller.grade}</div>
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
            </div>
        </RoomDetailBox>
    );
};

export default RoomDetailPage;
