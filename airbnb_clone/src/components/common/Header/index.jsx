import React from 'react';
import { HeaderBox } from './styled';
import { BiSearch } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    return (
        <HeaderBox>
            <div className="logoArea">
                <img className="logoImg" src=" /images/icons/red_logo.png" alt="" />
                <div className="logoTxt">airbnb</div>
            </div>
            <div className="inputArea">
                {/* <input className="inputBox" placeholder="검색 시작하기" /> */}
                <div className="inputBox">검색 시작하기</div>

                <div className="inputIconBox">
                    <BiSearch className="inputIcon" />
                </div>
            </div>

            <div className="infoArea">
                <div className="info_host">호스트 모드로 전환</div>
                <div className="info_lang">
                    <MdLanguage />
                </div>
                <div className="info_profile">
                    <IoIosMenu />
                    <img src="/images/icons/profile.png" alt="" />
                </div>
            </div>
        </HeaderBox >
    );
};

export default Header;