import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/common/Header';
import { TravelBox, TravelContent, TravelContentHeader } from './styled';
import Footer from '../../components/common/footer';
import Pagination from '../../components/common/pagination ';
import LocalContentList from '../../components/common/localContentList';
import axios from 'axios';


const TravelSearchPage = ({ location }) => {
    const [area, setArea] = useState(null);
    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        function searchParam(key) {
            return new URLSearchParams(location.search).get(key);
        };

        setArea(searchParam('location'));
    }, [location.search]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const loadAllRooms = async () => {
            const response = await axios.get('https://dev.rodin.club/rooms');

            console.log(response.data);
        };
        loadAllRooms();
    }, []);

    const areas = [
        {
            imgURL: ["/images/local/area/area1.png",],
            sector: "강남의 공동 주택 전체",
            moto: "S2 Clean & cozy room right next to Gangnam Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.74",
            comments: "54",
            heart: false,
            roomId: 1,
        },
        {
            imgURL: ["/images/local/area/area2.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "Your beatiful long term nest,cosy& memorable",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.82",
            comments: "83",
            heart: true,
            roomId: 2,
        },
        {
            imgURL: ["/images/local/area/area3.png",],
            sector: "홍대의 주거용 공간 전체",
            moto: "[OPEN]#루프탑캠핑#홍대입구역5분#Rooftop camping#Hongdae Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "47",
            heart: false,
            roomId: 3,
        },
        {
            imgURL: ["/images/local/area/area4.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "홍대의 당신의 아름다운 장기 렌탈집!(+ wifi에그)",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "40",
            heart: false,
            roomId: 4,
        },
        {
            imgURL: ["/images/local/area/area5.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "H2] 2020년 리뉴얼!합정역1분거리 초고층 스카이뷰 최고급 레지던스.무료주차",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.94",
            comments: "369",
            heart: false,
            roomId: 5,
        },
        {
            imgURL: ["/images/local/area/area1.png",],
            sector: "강남의 공동 주택 전체",
            moto: "S2 Clean & cozy room right next to Gangnam Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.74",
            comments: "54",
            heart: false,
            roomId: 6,
        },
        {
            imgURL: ["/images/local/area/area2.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "Your beatiful long term nest,cosy& memorable",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.82",
            comments: "83",
            heart: true,
            roomId: 7,
        },
        {
            imgURL: ["/images/local/area/area3.png",],
            sector: "홍대의 주거용 공간 전체",
            moto: "[OPEN]#루프탑캠핑#홍대입구역5분#Rooftop camping#Hongdae Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "47",
            heart: false,
            roomId: 8,
        },
        {
            imgURL: ["/images/local/area/area4.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "홍대의 당신의 아름다운 장기 렌탈집!(+ wifi에그)",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "40",
            heart: false,
            roomId: 9,
        },
        {
            imgURL: ["/images/local/area/area5.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "H2] 2020년 리뉴얼!합정역1분거리 초고층 스카이뷰 최고급 레지던스.무료주차",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.94",
            comments: "369",
            heart: false,
            roomId: 10,
        },
        {
            imgURL: ["/images/local/area/area1.png",],
            sector: "강남의 공동 주택 전체",
            moto: "S2 Clean & cozy room right next to Gangnam Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.74",
            comments: "54",
            heart: false,
            roomId: 11,
        },
        {
            imgURL: ["/images/local/area/area2.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "Your beatiful long term nest,cosy& memorable",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.82",
            comments: "83",
            heart: true,
            roomId: 12,
        },
        {
            imgURL: ["/images/local/area/area3.png",],
            sector: "홍대의 주거용 공간 전체",
            moto: "[OPEN]#루프탑캠핑#홍대입구역5분#Rooftop camping#Hongdae Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "47",
            heart: false,
            roomId: 13,
        },
        {
            imgURL: ["/images/local/area/area4.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "홍대의 당신의 아름다운 장기 렌탈집!(+ wifi에그)",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "40",
            heart: false,
            roomId: 14,
        },
        {
            imgURL: ["/images/local/area/area5.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "H2] 2020년 리뉴얼!합정역1분거리 초고층 스카이뷰 최고급 레지던스.무료주차",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.94",
            comments: "369",
            heart: false,
            roomId: 15,
        },
        {
            imgURL: ["/images/local/area/area1.png",],
            sector: "강남의 공동 주택 전체",
            moto: "S2 Clean & cozy room right next to Gangnam Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.74",
            comments: "54",
            heart: false,
            roomId: 16,
        },
        {
            imgURL: ["/images/local/area/area2.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "Your beatiful long term nest,cosy& memorable",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.82",
            comments: "83",
            heart: true,
            roomId: 17,
        },
        {
            imgURL: ["/images/local/area/area3.png",],
            sector: "홍대의 주거용 공간 전체",
            moto: "[OPEN]#루프탑캠핑#홍대입구역5분#Rooftop camping#Hongdae Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "47",
            heart: false,
            roomId: 18,
        },
        {
            imgURL: ["/images/local/area/area4.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "홍대의 당신의 아름다운 장기 렌탈집!(+ wifi에그)",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "40",
            heart: false,
            roomId: 19,
        },
        {
            imgURL: ["/images/local/area/area5.png",],
            sector: "홍대의 공동 주택 전체",
            moto: "H2] 2020년 리뉴얼!합정역1분거리 초고층 스카이뷰 최고급 레지던스.무료주차",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.94",
            comments: "369",
            heart: false,
            roomId: 20,
        },
    ];

    return (
        <TravelBox>
            <Header travel />
            <TravelContent>
                <TravelContentHeader>
                    <div className="headerSub">300개 이상의 숙소</div>
                    <div className="headerTit">{area}</div>
                    <div className="controller">
                        <div className="btn">취소 가능</div>
                        <div className="btn">숙소 유형</div>
                        <div className="btn">요금</div>
                        <div className="btn">즉시 예약</div>
                        <div className="btn">필터 추가하기</div>
                    </div>
                    {/* <div className="headerNotice">여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</div> */}
                    <div className="coronaNotice">예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요. <span>자세히 알아보기</span></div>
                </TravelContentHeader>
                <LocalContentList areas={areas} />
                <Pagination />
            </TravelContent>
            <Footer />
        </TravelBox >
    );
};

export default withRouter(TravelSearchPage);