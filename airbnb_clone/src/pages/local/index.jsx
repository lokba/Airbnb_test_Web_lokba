import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/common/Header';
import { LocalBox, LocalContent, LocalContentHeader, LocalContentList, Pagination } from './styled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarRateIcon from '@material-ui/icons/StarRate';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Footer from '../../components/common/footer';

const LocalSearchPage = ({ location }) => {

    const [area, setArea] = useState(null);

    useEffect(() => {
        function searchParam(key) {
            return new URLSearchParams(location.search).get(key);
        };

        setArea(searchParam('location'));
    }, [location.search]);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);



    //한글, 영어 문자열의 바이트 계산하는 함수
    let getTextLength = function (str) {
        let len = 0;
        for (let i = 0; i < str.length; i++) {
            if (escape(str.charAt(i)).length === 6) {
                len++;
            }
            len++;
        }
        return len;
    };

    //한글 영어 문자열의 바이트가 45까지 slice한 문자열을 반환하는 
    let getText = function (str) {
        let len = 0;
        for (let i = 0; i < str.length; i++) {
            if (escape(str.charAt(i)).length === 6) {
                len++;
            }
            len++;

            if (len > 45) {
                return str.slice(0, i);
            }
        }
    };

    const areas = [
        {
            imgURL: "/images/local/area/area1.png",
            sector: "강남의 공동 주택 전체",
            moto: "S2 Clean & cozy room right next to Gangnam Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.74",
            comments: "54",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area2.png",
            sector: "홍대의 공동 주택 전체",
            moto: "Your beatiful long term nest,cosy& memorable",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.82",
            comments: "83",
            heart: true,
        },
        {
            imgURL: "/images/local/area/area3.png",
            sector: "홍대의 주거용 공간 전체",
            moto: "[OPEN]#루프탑캠핑#홍대입구역5분#Rooftop camping#Hongdae Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "47",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area4.png",
            sector: "홍대의 공동 주택 전체",
            moto: "홍대의 당신의 아름다운 장기 렌탈집!(+ wifi에그)",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "40",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area5.png",
            sector: "홍대의 공동 주택 전체",
            moto: "H2] 2020년 리뉴얼!합정역1분거리 초고층 스카이뷰 최고급 레지던스.무료주차",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.94",
            comments: "369",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area1.png",
            sector: "강남의 공동 주택 전체",
            moto: "S2 Clean & cozy room right next to Gangnam Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.74",
            comments: "54",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area2.png",
            sector: "홍대의 공동 주택 전체",
            moto: "Your beatiful long term nest,cosy& memorable",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.82",
            comments: "83",
            heart: true,
        },
        {
            imgURL: "/images/local/area/area3.png",
            sector: "홍대의 주거용 공간 전체",
            moto: "[OPEN]#루프탑캠핑#홍대입구역5분#Rooftop camping#Hongdae Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "47",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area4.png",
            sector: "홍대의 공동 주택 전체",
            moto: "홍대의 당신의 아름다운 장기 렌탈집!(+ wifi에그)",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "40",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area5.png",
            sector: "홍대의 공동 주택 전체",
            moto: "H2] 2020년 리뉴얼!합정역1분거리 초고층 스카이뷰 최고급 레지던스.무료주차",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.94",
            comments: "369",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area1.png",
            sector: "강남의 공동 주택 전체",
            moto: "S2 Clean & cozy room right next to Gangnam Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.74",
            comments: "54",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area2.png",
            sector: "홍대의 공동 주택 전체",
            moto: "Your beatiful long term nest,cosy& memorable",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.82",
            comments: "83",
            heart: true,
        },
        {
            imgURL: "/images/local/area/area3.png",
            sector: "홍대의 주거용 공간 전체",
            moto: "[OPEN]#루프탑캠핑#홍대입구역5분#Rooftop camping#Hongdae Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "47",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area4.png",
            sector: "홍대의 공동 주택 전체",
            moto: "홍대의 당신의 아름다운 장기 렌탈집!(+ wifi에그)",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "40",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area5.png",
            sector: "홍대의 공동 주택 전체",
            moto: "H2] 2020년 리뉴얼!합정역1분거리 초고층 스카이뷰 최고급 레지던스.무료주차",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.94",
            comments: "369",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area1.png",
            sector: "강남의 공동 주택 전체",
            moto: "S2 Clean & cozy room right next to Gangnam Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.74",
            comments: "54",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area2.png",
            sector: "홍대의 공동 주택 전체",
            moto: "Your beatiful long term nest,cosy& memorable",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.82",
            comments: "83",
            heart: true,
        },
        {
            imgURL: "/images/local/area/area3.png",
            sector: "홍대의 주거용 공간 전체",
            moto: "[OPEN]#루프탑캠핑#홍대입구역5분#Rooftop camping#Hongdae Station",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "47",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area4.png",
            sector: "홍대의 공동 주택 전체",
            moto: "홍대의 당신의 아름다운 장기 렌탈집!(+ wifi에그)",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.87",
            comments: "40",
            heart: false,
        },
        {
            imgURL: "/images/local/area/area5.png",
            sector: "홍대의 공동 주택 전체",
            moto: "H2] 2020년 리뉴얼!합정역1분거리 초고층 스카이뷰 최고급 레지던스.무료주차",
            info: ["최대 인원 3명 · 침실 1개 · 침대 1개 · 욕실 1개", "에어컨 · 주방 · 무선 인터넷 · 세탁기"],
            star: "4.94",
            comments: "369",
            heart: false,
        },
    ];

    return (
        <LocalBox>
            <Header />
            <LocalContent>

                <LocalContentHeader>
                    <div className="headerSub">300개 이상의 숙소</div>
                    <div className="headerTit">{area}의 숙소</div>
                    <div className="controller">
                        <div className="btn">취소 수수료 없음</div>
                        <div className="btn">숙소 유형</div>
                        <div className="btn">요금</div>
                        <div className="btn">즉시 예약</div>
                        <div className="btn">필터 추가하기</div>
                    </div>
                    <div className="headerNotice">여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</div>
                    <div className="coronaNotice">예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요. <span>자세히 알아보기</span></div>
                </LocalContentHeader>
                <LocalContentList>
                    {
                        areas.map(area => (
                            <div className="localItemBox">
                                <div className="localItem">
                                    <div className="localItem_img">
                                        <img src={area.imgURL} alt="" />
                                    </div>
                                    <div className="localItem_content">
                                        <div className="localItem_head">
                                            <div className="content_sector">{area.sector}</div>
                                            <div className="content_moto">{getTextLength(area.moto) > 45 ? getText(area.moto) + "..." : area.moto}</div>
                                            <div className="line"></div>
                                            <div className="content_info">{area.info[0]}</div>
                                            <div className="content_info">{area.info[1]}</div>
                                        </div>
                                        <div className="localItem_foot">
                                            <StarRateIcon />
                                            <div className="star">{area.star}</div>
                                            <div className="comment">(후기 {area.comments}개)</div>
                                        </div>
                                        <div className="heart">
                                            {
                                                area.heart ? (<FavoriteIcon className="heartOn" />) : (<FavoriteBorderIcon />)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </LocalContentList>
                <Pagination>
                    <div className="pagination_content">
                        <div className="navigation">
                            <div className="icon arrow">
                                <NavigateBeforeIcon />
                            </div>
                            <div className="pageNumber">1</div>
                            <div className="pageNumber">2</div>
                            <div className="pageNumber">3</div>
                            <div className="pageNumber">4</div>
                            <div className="pageNumber">5</div>
                            <div className="icon">
                                <MoreHorizIcon />
                            </div>
                            <div className="pageNumber">15</div>
                            <div className="icon arrow">
                                <NavigateNextIcon />
                            </div>
                        </div>
                        <div className="roomNumber">숙소 300개 이상 중 1 - 20</div>
                        <div className="pagination_notice">전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이 추가될 수 있습니다.</div>
                    </div>

                </Pagination>

            </LocalContent>
            <Footer />
        </LocalBox >
    );
};

export default withRouter(LocalSearchPage);