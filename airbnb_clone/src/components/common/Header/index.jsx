import React, { useEffect } from 'react';
import { HeaderBox } from './styled';
import { BiSearch } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { withRouter } from 'react-router-dom';

const Header = ({ match }) => {

    useEffect(() => {
        const header = document.querySelector('.headerBox');
        console.log("header", header);

        if (header) {
            if (match.url === '/') {
                window.addEventListener('scroll', () => {
                    console.log("header", header);
                    if (window.pageYOffset >= 0 && window.pageYOffset < 58) {
                        const top = 58 - `${window.pageYOffset}`;

                        header.style.top = `${top}px`;
                    }
                    else {
                        header.style.top = '0px';
                    }
                });
            }
            else {
                header.style.top = '0px';
            }
        }

    }, [match.url]);


    return (
        <HeaderBox className="headerBox">
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

export default withRouter(Header);