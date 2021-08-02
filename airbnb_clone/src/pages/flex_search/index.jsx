import React, { useState } from 'react';
import Header from '../../components/common/Header';
import { FlexSearchBox, FlexSearchHeader } from './styled';
import { RiArrowDownSLine, RiEqualizerLine } from "react-icons/ri";

const FlexSearch = () => {

    const [menuOn, setMenuOn] = useState(0);

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
    ]
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
        </FlexSearchBox >
    );
};

export default FlexSearch;