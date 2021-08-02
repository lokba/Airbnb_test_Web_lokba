import React from 'react';
import Corona from '../../components/common/corona';
import Header from '../../components/common/Header';
import { HomePageBox, MainBnrBox, NearArea } from './styled';

const HomePage = () => {
    const nearArealists = [
        {
            imgURL: '/images/home/near_destination/seoul.png',
            name: '서울',
            distance: '차로 15분 거리'
        },
        {
            imgURL: '/images/home/near_destination/busan.png',
            name: '부산',
            distance: '차로 5시간 거리'
        },
        {
            imgURL: '/images/home/near_destination/yangyang.png',
            name: '양양군',
            distance: '차로 2.5시간 거리'
        },
        {
            imgURL: '/images/home/near_destination/sokcho.png',
            name: '속초시',
            distance: '차로 2.5시간 거리'
        },
        {
            imgURL: '/images/home/near_destination/daegu.png',
            name: '대구',
            distance: '차로 4시간 거리'
        },
        {
            imgURL: '/images/home/near_destination/gosung.png',
            name: '고성군',
            distance: '차로 3시간 거리'
        },
        {
            imgURL: '/images/home/near_destination/wanju.png',
            name: '완주군',
            distance: '차로 3시간 거리'
        },
        {
            imgURL: '/images/home/near_destination/jeonju.png',
            name: '전주시',
            distance: '차로 3시간 거리'
        },
    ];


    return (
        <HomePageBox>
            <Corona />
            <Header />
            <MainBnrBox>
                <img src="/images/home/banner/main_banner.png" alt="" />
                <div className="main_bnr_txt">
                    <div>올림픽/패럴림픽 출전 선수와<br /> 함께하는<br />온라인 체험</div>
                    <div className="main_bnr_btn">지금 둘러보기</div>
                </div>
            </MainBnrBox>

            <NearArea>
                <div className="nearArea_tit">가까운 여행지 둘러보기</div>
                <div className="nearArea_list">
                    {
                        nearArealists.map(item =>
                            <div className="nearArea_item">
                                <img src={item.imgURL} alt="" />
                                <div className="nearArea_txt">
                                    <div className="nearArea_name">{item.name}</div>
                                    <div>{item.distance}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </NearArea>

        </HomePageBox>
    );
};

export default HomePage;