import React from 'react';
import Header from '../../components/common/Header';
import { BookPageBox } from './styled';

const BookPage = () => {
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
        </BookPageBox>
    );
};

export default BookPage;