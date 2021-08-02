import React from 'react';
import { HeaderBox } from './styled';
import { BiSearch } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    return (
        <HeaderBox>
            <div className="logoArea">
                <img src="/images/icons/red_logo.png" alt="" />
                <div>airbnb</div>
            </div>
            <div className="inputArea">
                <input placeholder="검색 시작하기" />

                <div>
                    <BiSearch />
                </div>
            </div>

            <div className="infoArea">
                <div>호스트 되기</div>
                <MdLanguage />
                <div>
                    <IoIosMenu />
                    <img src="/images/icons/profile.png" alt="" />
                </div>
            </div>
        </HeaderBox >
    );
};

export default Header;