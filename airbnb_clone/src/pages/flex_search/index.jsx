import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import { FlexSearchBox, FlexSearchHeader, SearchBox, SearchItemBox } from './styled';
import { RiArrowDownSLine, RiEqualizerLine } from "react-icons/ri";
import Footer from '../../components/common/footer';

const FlexSearch = () => {

    const [menuOn, setMenuOn] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const menus = [
        {
            imgURL: "/images/flex_search/icons/treehouse.jpeg",
            name: "트리하우스",
        },
        {
            imgURL: "/images/flex_search/icons/seaclose.jpeg",
            name: "해변 근처",
        },
        {
            imgURL: "/images/flex_search/icons/container.jpeg",
            name: "화물 컨테이너",
        },
        {
            imgURL: "/images/flex_search/icons/smallhouse.jpeg",
            name: "초소형 주택",
        },
        {
            imgURL: "/images/flex_search/icons/island.jpeg",
            name: "섬",
        },
        {
            imgURL: "/images/flex_search/icons/loghouse.jpeg",
            name: "통나무집",
        },
        {
            imgURL: "/images/flex_search/icons/dom.jpeg",
            name: "돔",
        },
        {
            imgURL: "/images/flex_search/icons/farm.jpeg",
            name: "농장",
        },
        {
            imgURL: "/images/flex_search/icons/castle.jpeg",
            name: "성",
        },
        {
            imgURL: "/images/flex_search/icons/yurt.jpeg",
            name: "유르트",
        },
        {
            imgURL: "/images/flex_search/icons/camping.jpeg",
            name: "캠핑카",
        },
        {
            imgURL: "/images/flex_search/icons/houseboat.jpeg",
            name: "하우스보트",
        },
        {
            imgURL: "/images/flex_search/icons/boat.jpeg",
            name: "보트",
        },

        {
            imgURL: "/images/flex_search/icons/ahouse.jpeg",
            name: "A자형 주택",
        },
        {
            imgURL: "/images/flex_search/icons/barn.jpeg",
            name: "헛간",
        },
    ];

    const areas = [
        {
            imgURL: "/images/flex_search/items/item1.png",
            distance: "3,026",
            location: "Balamban, 중부 비사야",
            price: "443,216",
            checkin: [11, 12],
            checkout: [11, 14],
        },
        {
            imgURL: "/images/flex_search/items/item2.png",
            distance: "5,835",
            location: "문나르(Munnar),케랄라 주",
            price: "204,857",
            checkin: [1, 28],
            checkout: [1, 30],
        },
        {
            imgURL: "/images/flex_search/items/item3.png",
            distance: "2,439",
            location: "바기오, Cordillera Administrative Region",
            price: "303,626",
            checkin: [11, 5],
            checkout: [11, 7],
        },
        {
            imgURL: "/images/flex_search/items/item4.png",
            distance: "5,248",
            location: "Baturiti,발리",
            price: "36,407",
            checkin: [1, 28],
            checkout: [1, 30],
        },
        {
            imgURL: "/images/flex_search/items/item5.png",
            distance: "5,269",
            location: "우붓,발리",
            price: "322,387",
            checkin: [12, 17],
            checkout: [12, 19],
        },
        {
            imgURL: "/images/flex_search/items/item6.png",
            distance: "4,567",
            location: "Fagu, 히마찰프라데시 주(Himachal Pradesh)",
            price: "78,867",
            checkin: [10, 8],
            checkout: [10, 10],
        },
        {
            imgURL: "/images/flex_search/items/item7.png",
            distance: "5,268",
            location: "Kecamatan Ubud,발리",
            price: "78,871",
            checkin: [12, 10],
            checkout: [12, 12],
        },
        {
            imgURL: "/images/flex_search/items/item8.png",
            distance: "4,542",
            location: "Jibhi, 히마찰프라데시 주(Himachal Pradesh)",
            price: "117,312",
            checkin: [10, 29],
            checkout: [10, 31],
        },
    ];


    return (
        <FlexSearchBox>
            <Header flex_search />
            <FlexSearchHeader>
                <div className="menus">
                    {
                        menus.map((menu, index) =>
                            <div className={menuOn === index ? "menu menuOn" : "menu"} onClick={() => setMenuOn(index)}>
                                {
                                    menuOn === index && <img src={menu.imgURL} alt="" />
                                }
                                <div>{menu.name}</div>
                            </div>
                        )
                    }
                </div>
                <div className="filterBox">
                    <div className="filterItem">
                        <div>언제든</div>
                        <RiArrowDownSLine className="arrow" />
                    </div>
                    <div className="filterItem">
                        <div>인원</div>
                        <RiArrowDownSLine className="arrow" />
                    </div>
                    <div className="filterItem">
                        <RiEqualizerLine className="filter" />
                        <div>필터</div>
                    </div>
                </div>
            </FlexSearchHeader>
            <SearchBox>
                {
                    areas.map(({
                        distance,
                        imgURL,
                        location,
                        price,
                        checkin,
                        checkout
                    }, index) =>
                        <SearchItem
                            key={index}
                            distance={distance}
                            imgURL={imgURL}
                            location={location}
                            price={price}
                            checkin={checkin}
                            checkout={checkout}
                        />
                    )
                }
            </SearchBox>
            <Footer />
        </FlexSearchBox >
    );
};

export default FlexSearch;


const SearchItem = ({
    imgURL,
    distance,
    location,
    price,
    checkin,
    checkout,
}) => {
    return (
        <SearchItemBox>
            <div className="search_img">
                <img src={imgURL} alt="" />
            </div>
            <div className="search_info">
                <div className="location">{location.length > 18 ? (location.slice(0, 18) + '...') : (location)}</div>
                <div>₩{price} / 박</div>
            </div>
            <div className="search_info">
                <div>{distance}km 거리</div>
                <div>{checkin[0]}월 {checkin[1]}일 - {checkout[0]}월 {checkout[1]}일</div>
            </div>
        </SearchItemBox>
    )
}