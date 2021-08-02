import React from 'react';
import Corona from '../../components/common/corona';
import Footer from '../../components/common/footer';
import Header from '../../components/common/Header';
import { FlexibleSearch, HomePageBox, HostingBanner, MainBnrBox, NearArea, TravelBox } from './styled';

const HomePage = () => {
    const nearAreaLists = [
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

    const travelLists = [
        {
            imgURL: "/images/home/travel/travel1.png",
            txt: "자연생활을 만끽할 수 있는 숙소"
        },
        {
            imgURL: "/images/home/travel/travel2.png",
            txt: "독특한 공간"
        },
        {
            imgURL: "/images/home/travel/travel3.png",
            txt: "집 전체"
        },
        {
            imgURL: "/images/home/travel/travel4.png",
            txt: "반려동물 동반 가능"
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
                        nearAreaLists.map(item =>
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

            <FlexibleSearch>
                <img src="/images/home/banner/search.png" alt="" />
                <div className="search_bnr_txt">
                    <div>어디든 상관없이<br /> 떠나고 싶을 때<br />에어비앤비가<br />도와드립니다!</div>
                    <div className="search_bnr_btn">유연한 검색</div>
                </div>
            </FlexibleSearch>


            <TravelBox>
                <div className="travel_tit">어디에서나, 여행은 살아보는 거야!</div>
                <div className="travel_list">
                    {
                        travelLists.map(item =>
                            <div className="travel_item">
                                <img src={item.imgURL} alt="" />
                                <div>{item.txt}</div>
                            </div>
                        )
                    }
                </div>
            </TravelBox>

            <HostingBanner>
                <img src="/images/home/banner/hosting.png" alt="" />
                <div className="hosting_bnr_txt">
                    <div className="hosting_bnr_tit">호스팅 시작하기</div>
                    <div className="hosting_bnr_sub">숙소를 공유하여 부수입을 올리고 새로운 가능성을 <br />만나세요.</div>
                    <div className="hosting_bnr_btn">자세히 알아보기</div>
                </div>
            </HostingBanner>

            <Footer />
        </HomePageBox>
    );
};

export default HomePage;