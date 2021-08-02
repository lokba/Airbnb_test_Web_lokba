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
            </div>
        </HomePageBox>
    );
};

export default HomePage;