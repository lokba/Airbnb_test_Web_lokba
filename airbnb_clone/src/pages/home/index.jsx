import React from 'react';
import Corona from '../../components/common/corona';
import Header from '../../components/common/Header';
import { HomePageBox } from './styled';

const HomePage = () => {
    return (
        <HomePageBox>
            <Corona />
            <Header />
            <div className="main_bnr">
                <img src="/images/home/banner/main_banner.png" alt="" />
                <div className="main_bnr_txt">
                    <div>올림픽/패럴림픽 출전 선수와<br /> 함께하는<br />온라인 체험</div>
                    <div className="main_bnr_btn">지금 둘러보기</div>
                </div>
            </div>
        </HomePageBox>
    );
};

export default HomePage;