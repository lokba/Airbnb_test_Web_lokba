import React, { useEffect, useState } from 'react';
import { BecomeHostBox, HostIntroBox, HostStageBox } from './styled';
import { Link, withRouter } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUserInfo } from '../../store/userInfo';
import FirebaseFileUpload from '../../components/common/imageUploader';
import GoogleMap from '../../components/geocode';

const BecomeHostPage = () => {
    const { userIdx } = useSelector(({ userInfo }) => ({
        userIdx: userInfo.userIdx,
    }));

    const dispatch = useDispatch();

    const [stage1, setStage1] = useState(null);
    const [stage2, setStage2] = useState(null);
    const [stage3, setStage3] = useState(null);
    const [stage4, setStage4] = useState("");

    const onChangeLocation = (e) => {
        setStage4(e.target.value);
    }

    const [stage6, setStage6] = useState([]);

    const [imageUrl, setImageUrl] = useState(null);
    const handleImageUrl = (url) => setImageUrl(url);


    const onToggleRoomConv = (str) => {
        if (!stage6.includes(str)) {
            setStage6(stage6.concat(str))
        }
        else {
            setStage6(stage6.filter(v => v !== str));
        }
    }

    const [curStage, setCurStage] = useState(null);

    const [roomName, setRoomName] = useState("");
    const [roomDetailInfo, setRoomDetailInfo] = useState("");

    const onChangeRoomName = (e) => {
        setRoomName(e.target.value);
    }
    const onChangeRoomDetailInfo = (e) => {
        setRoomDetailInfo(e.target.value)
    }

    const [roomPrice, setRoomPrice] = useState(0);

    const onChangePrice = (e) => {
        setRoomPrice(e.target.value);

        setRoomInfo({ ...roomInfo, roomPrice: e.target.value });
    }

    const [roomCapacity, setRoomCapacity] = useState(1);
    const [roomBed, setRoomBed] = useState(1);
    const [roomBedroom, setRoomBedroom] = useState(1);
    const [roomBathroom, setRoomBathroom] = useState(1);

    const plusCapacity = () => setRoomCapacity(roomCapacity + 1);
    const minusCapacity = () => roomCapacity !== 1 && setRoomCapacity(roomCapacity - 1);

    const plusBed = () => setRoomBed(roomBed + 1);
    const minusBed = () => roomBed !== 1 && setRoomBed(roomBed - 1);

    const plusBedroom = () => setRoomBedroom(roomBedroom + 1);
    const minusBedroom = () => roomBedroom !== 1 && setRoomBedroom(roomBedroom - 1);

    const plusBathroom = () => setRoomBathroom(roomBathroom + 1);
    const minusBathroom = () => roomBathroom !== 1 && setRoomBathroom(roomBathroom - 1);

    const [gps, setGps] = useState(null);

    const [roomInfo, setRoomInfo] = useState({
        roomLocation: null,
        roomCapacity: null,
        roomBed: null,
        roomBedroom: null,
        roomBathroom: null,
        roomType: null,
        roomPrice: null,
        roomDesc: null,
        roomKind: null,
        roomConvenient: null,
        roomImageUrl: null,
        roomName: null,
        roomInfo: null,
        roomUploadUser: userIdx,
        roomLati: null,
        roomLongi: null,
    });

    const onStoreRoomInfo = () => {
        setRoomInfo({
            ...roomInfo,
            roomType: stage1,
            roomDesc: stage2,
            roomKind: stage3,
            roomLocation: stage4,
            roomCapacity,
            roomBed,
            roomBedroom,
            roomBathroom,
            roomConvenient: stage6.join(', '),
            roomName,
            roomInfo: roomDetailInfo,
            roomImageUrl: imageUrl,
            roomLati: String(gps.lat),
            roomLongi: String(gps.lng),
        })
    };

    const onClickRegisterRoom = () => {
        localStorage.setItem('HOST_ACCESS_TOKEN', 'abcdefg');

        const headers = {
            "x-access-token": localStorage.getItem("ACCESS_TOKEN")
        }

        const registerRoom = async () => {
            const response = await axios.post('https://dev.rodin.club/rooms', roomInfo, { headers });

            response.data.isSuccess && setCurStage(11);
        }
        registerRoom();
    }

    const onClickBecomeHoster = () => {
        const headers = {
            "x-access-token": localStorage.getItem("ACCESS_TOKEN")
        }
        const registerHost = async () => {
            await axios.patch("https://dev.rodin.club/users/infos/hosts", { userIdx }, { headers });
            const response = await axios.get(`https://dev.rodin.club/users/${userIdx}`, { headers });
            dispatch(getUserInfo(response.data.result));
        }
        registerHost();
        setCurStage(1);
    }

    const handleButton = async (props) => {
        const currentAddr = document.querySelector(".location").value;

        if (currentAddr) {
            const { lat, lng } = await GoogleMap(currentAddr);
            setGps({ lat, lng });
            alert("주소 등록이 완료되었습니다.")
        }
    }

    const roomDesc = {
        "아파트": [
            {
                tit: "공동 주택",
                sub: "다세대 건물 또는 단지 내의 임대 공간입니다",
            },
            {
                tit: "공동주택(콘도)",
                sub: "거주자 소유의 다세대 건물 또는 단지 내의 공간을 의미합니다.",
            },
            {
                tit: "로프트",
                sub: "개방적인 구조의 아파트나 콘도로 내부가 낮은 벽으로 마감되었을 수 있습니다",
            },
            {
                tit: "레지던스",
                sub: "전문 관리업체가 운영하는 아파트로, 호텔 같은 편의시설을 갖추고 있습니다.",
            },
            {
                tit: "카사 파르티쿨라르",
                sub: "B&B 와 비슷한 쿠바 숙소로, 호스트가 거주하는 집 안 개인실을 의미합니다",
            },
        ],
        "주택": [
            {
                tit: "주거용 공간",
                sub: "단독 또는 연립주택입니다.",
            },
            {
                tit: "통나무집",
                sub: "목재 등의 천연 재료로 자연 속에 지은 집입니다.",
            },
            {
                tit: "저택",
                sub: "널찍한 실내외 공간, 정원, 수영장 등을 갖춘 고급 주택입니다.",
            },
            {
                tit: "타운하우스",
                sub: "연립주택으로 공용 벽과 야외 공간이 있을 수 있습니다.",
            },
            {
                tit: "전원주택",
                sub: "시골이나 호숫가, 해변가에 지어진 아담한 주택입니다.",
            },
            {
                tit: "방갈로",
                sub: "넓은 현관과 박공 지붕을 갖춘 단층 주택입니다.",
            },
            {
                tit: "복토 주택",
                sub: "땅속에 짓거나 흙 등의 재료로 만든 집을 말합니다.",
            },
            {
                tit: "하우스보트",
                sub: "주거용을 사용할 수 있는 배를 비롯한 수상 가옥을 말합니다.",
            },
            {
                tit: "오두막",
                sub: "짚을 엮어 만든 지붕처럼 나무나 진흙을 재료로 만든 집을 말합니다.",
            },
            {
                tit: "농장 체험 숙소",
                sub: "농촌에 있는 숙소로, 게스트가 동물과 교감하거나 등산, 수공예 등의 활동을 즐길 수 있는 곳입니다.",
            },
            {
                tit: "돔하우스",
                sub: "지붕이 돔 형태로 되어 있거나 전체가 완전히 구 형태로 이루어진 집입니다.",
            },
            {
                tit: "키클라데스 주택",
                sub: "그리스 키클라데스 섬에서 볼 수 있는 새하얀 가옥으로, 평평한 지붕을 갖추고 있습니다.",
            },
            {
                tit: "샬레",
                sub: "스키 또는 여름 휴가용으로 인기 있으며 박공 지붕을 갖춘 목조 주택을 의미합니다.",
            },
            {
                tit: "담무소",
                sub: "판텔레리아 섬에 있는 돌로 만든 주택으로, 돔 지붕을 갖추고 있습니다. ",
            },
            {
                tit: "등대",
                sub: "배를 안내하기 위해 밝은 빛을 비추는 수변 탑을 의미합니다.",
            },
            {
                tit: "마차",
                sub: "양치기가 양을 몰면서 주거용으로 사용한 작은 화차를 의미합니다.",
            },
            {
                tit: "초소형 주택",
                sub: "37제곱미터(400제곱피트) 이하의 단독 주택을 말합니다.",
            },
            {
                tit: "트룰로",
                sub: "이탈리아에서 유래된 둥근 형태의 석조 주택으로, 원뿔 모양의 지붕을 하고 있습니다.",
            },
            {
                tit: "카사 파르티쿨라르",
                sub: "B&B와 비슷한 쿠바 숙소로, 호스트가 거주하는 집 안 개인실을 의미합니다.",
            },
            {
                tit: "펜션",
                sub: "한국 시골에 자리한 숙소로 바비큐 시설과 공용 공간을 갖추고 있습니다.",
            },
        ],
        "별채": [
            {
                tit: "게스트용 별채",
                sub: "본채와 필지를 공유하지만 따로 떨어져있는 건물을 의미합니다.",
            },
            {
                tit: "게스트 스위트",
                sub: "더 큰 구조물의 안에 있거나 나란히 붙어 있는 별도의 공간으로 전용",
            },
            {
                tit: "농장 체험 숙소",
                sub: "농촌에 있는 숙소로, 게스트가 동물과 교감하거나 등산, 수공예 등의",
            },
        ],
        "독특한 숙소": [
            {
                tit: "헛간",
                sub: "곡물, 가축, 농기구를 저장하는 곳에서 주거용으로 개조된 공간을 의미합니다.",
            },
            {
                tit: "보트",
                sub: "숙박 기간 동안 정박 중인 배, 보트, 요트로, 하우스보트와는 다릅니다.",
            },
            {
                tit: "버스",
                sub: "내부를 독창저긍로 개조한 다인승 차량입니다.",
            },
            {
                tit: "캠핑카",
                sub: "집과 차량의 중간 형태를 띤 주거용 차량이나 캠핑 트레일러를 말합니다.",
            },
            {
                tit: "트리하우스",
                sub: "나무 몸통이나 가지에 지어진 숙소입니다.",
            },
            {
                tit: "섬",
                sub: "사방이 물로 둘러싸인 땅을 말합니다.",
            },
            {
                tit: "펜션",
                sub: "한국 시골에 자리한 숙소로 바비큐 시설과 공용 공간을 갖추고 있습니다.",
            },
        ],
        "B&B": [
            {
                tit: "B&B",
                sub: "호스트가 상주하며 아침 식사를 제공하는 숙박업체입니다.",
            },
            {
                tit: "산장",
                sub: "숲이나 산 등 자연 가까이 자리한 숙박업체입니다.",
            },
            {
                tit: "농장 체험 숙소",
                sub: "농촌에 있는 숙소로, 게스트가 동물과 교감하거나 등산, 수공예 등의 활동을 즐길 수 있는 곳입니다.",
            },
            {
                tit: "료칸",
                sub: "독특한 일본 문활르 경험할 수 있는 작은 여관을 말합니다.",
            },
        ],
        "부티크 호텔": [
            {
                tit: "호텔",
                sub: "개인실, 스위트룸 또는 독특한 공간을 제공하는 숙박업체입니다.",
            },
            {
                tit: "호스텔",
                sub: "다인실이나 개인실을 제공하는 숙박업체입니다.",
            },
            {
                tit: "리조트",
                sub: "호텔보다 더 많은 편의시설과 서비스를 제공하는 숙박업체입니다.",
            },
            {
                tit: "아파트 호텔",
                sub: "호텔 같은 편의시설과 객실을 갖춘 공간으로, 아파트와 비슷합니다.",
            },
            {
                tit: "레지던스",
                sub: "전문 관리업체가 운영하는 아파트로, 호텔 같은 편의시설을 갖추고 있습니다.",
            },
        ],
    }

    const roomConvenience = {
        "special": [
            "수영장", "자쿠지", "파티오", "바비큐 그릴", "화덕", "당구대", "실내 벽난로", "야외 식사 공간", "운동 기구"
        ],
        "popular": [
            "무선 인터넷", "TV", "주방", "세탁기", "건물 내 무료 주차", "건물 내 유료 주차", "에어컨", "업무 전용 공간", "야외 샤워 시설"
        ],
        "safe": [
            "화재경보기", "구급 상자", "일산화탄소 경보기", "소화기"
        ],
    }


    return (
        <BecomeHostBox>
            {
                !curStage &&
                <HostIntroBox>
                    <div className="host_intro_img">
                        <img src="/images/become_host/img/main.jpg" alt="" />
                        <Link to="/" className="logo">
                            <img src="/images/icons/red_logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="host_intro_body">
                        <div className="tit">간단한 10단계로 호스팅<br />시작하기</div>
                        <div className="content">에어비앤비 호스트가 되어보세요. 에어비앤비에서 모든<br /> 과정을 도와드립니다.</div>
                        <div className="btn">
                            <div className="startBtn" onClick={onClickBecomeHoster}>시작하기</div>
                        </div>
                        <Link to="/host/homes" className="exitBtn">나가기</Link>
                    </div>
                </HostIntroBox>
            }
            {
                curStage === 1 &&
                (
                    <HostStageBox>
                        <div className="host_stage_img">
                            <div className="stage_tit">
                                호스팅할 숙소 유형을<br /> 알려주세요.
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage1_list">
                                <div className={stage1 === "아파트" ? "s1_opt stage1_on" : "s1_opt"} onClick={() => setStage1("아파트")}>
                                    <div className="s1_tit">아파트</div>
                                    <img src="/images/become_host/stage1/room1.png" alt="" />
                                </div>
                                <div className={stage1 === "주택" ? "s1_opt stage1_on" : "s1_opt"} onClick={() => setStage1("주택")}>
                                    <div className="s1_tit">주택</div>
                                    <img src="/images/become_host/stage1/room2.png" alt="" />
                                </div>
                                <div className={stage1 === "별채" ? "s1_opt stage1_on" : "s1_opt"} onClick={() => setStage1("별채")}>
                                    <div className="s1_tit">별채</div>
                                    <img src="/images/become_host/stage1/room3.png" alt="" />
                                </div>
                                <div className={stage1 === "독특한 숙소" ? "s1_opt stage1_on" : "s1_opt"} onClick={() => setStage1("독특한 숙소")}>
                                    <div className="s1_tit">독특한 숙소</div>
                                    <img src="/images/become_host/stage1/room4.png" alt="" />
                                </div>
                                <div className={stage1 === "B&B" ? "s1_opt stage1_on" : "s1_opt"} onClick={() => setStage1("B&B")}>
                                    <div className="s1_tit">B&B</div>
                                    <img src="/images/become_host/stage1/room5.png" alt="" />
                                </div>
                                <div className={stage1 === "부티크 호텔" ? "s1_opt stage1_on" : "s1_opt"} onClick={() => setStage1("부티크 호텔")}>
                                    <div className="s1_tit">부티크 호텔</div>
                                    <img src="/images/become_host/stage1/room6.png" alt="" />
                                </div>
                            </div>
                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(null)}>뒤로</div>
                                <div className="nextBtn" onClick={() => setCurStage(2)}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 2 &&
                (
                    <HostStageBox>
                        <div className="host_stage_img">
                            <div className="stage_tit">
                                다음 중 숙소를 가장 잘<br />설명하는 문구는<br />무엇인가요?
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage2_list">
                                {
                                    roomDesc[stage1].map((v, idx) => (
                                        <div key={idx} className={stage2 === v.tit ? "s2_opt stage2_on" : "s2_opt"} onClick={() => setStage2(v.tit)}>
                                            <div className="s2_tit">{v.tit}</div>
                                            <div className="s2_sub">{v.sub}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(1)}>뒤로</div>
                                <div className="nextBtn" onClick={() => setCurStage(3)}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 3 &&
                (
                    <HostStageBox>
                        <div className="host_stage_img">
                            <div className="stage_tit">
                                게스트가 머무르게 될<br />숙소의 종류가<br />무엇인가요?
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage3_list">
                                <div className={stage3 === "공간 전체" ? "s3_opt stage3_on" : "s3_opt"} onClick={() => setStage3("공간 전체")}>
                                    <div className="s3_tit">공간 전체</div>
                                </div>
                                <div className={stage3 === "개인실" ? "s3_opt stage3_on" : "s3_opt"} onClick={() => setStage3("개인실")}>
                                    <div className="s3_tit">개인실</div>
                                </div>
                                <div className={stage3 === "다인실" ? "s3_opt stage3_on" : "s3_opt"} onClick={() => setStage3("다인실")}>
                                    <div className="s3_tit">다인실</div>
                                </div>
                            </div>
                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(2)}>뒤로</div>
                                <div className="nextBtn" onClick={() => setCurStage(4)}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 4 &&
                (
                    <HostStageBox>
                        <div className="host_stage_img">
                            <div className="stage_tit">
                                숙소 위치는 어디인가요?
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="locationBar">
                                <LocationOnIcon />
                                <input placeholder="주소를 입력하세요." name="location" value={stage4} onChange={onChangeLocation} className="location" />
                                <button onClick={handleButton}>등록</button>
                            </div>

                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(3)}>뒤로</div>
                                <div className="nextBtn" onClick={() => setCurStage(5)}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 5 &&
                (
                    <HostStageBox>
                        <div className="host_stage_img">
                            <div className="stage_tit">
                                숙소에서 맞이할 최대<br />인원수를 알려주세요.
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage5_list">
                                <div className="s5_opt">
                                    <div className="s5_tit">게스트</div>
                                    <div className="s5_ctrl">
                                        <RemoveIcon onClick={minusCapacity} />
                                        <div>{roomCapacity}</div>
                                        <AddIcon onClick={plusCapacity} />
                                    </div>
                                </div>
                                <div className="s5_opt">
                                    <div className="s5_tit">침대</div>
                                    <div className="s5_ctrl">
                                        <RemoveIcon onClick={minusBed} />
                                        <div>{roomBed}</div>
                                        <AddIcon onClick={plusBed} />
                                    </div>
                                </div>
                                <div className="s5_opt">
                                    <div className="s5_tit">침실</div>
                                    <div className="s5_ctrl">
                                        <RemoveIcon onClick={minusBedroom} />
                                        <div>{roomBedroom}</div>
                                        <AddIcon onClick={plusBedroom} />
                                    </div>
                                </div>
                                <div className="s5_opt">
                                    <div className="s5_tit">욕실</div>
                                    <div className="s5_ctrl">
                                        <RemoveIcon onClick={minusBathroom} />
                                        <div>{roomBathroom}</div>
                                        <AddIcon onClick={plusBathroom} />
                                    </div>
                                </div>
                            </div>
                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(4)}>뒤로</div>
                                <div className="nextBtn" onClick={() => setCurStage(6)}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 6 &&
                (
                    <HostStageBox>
                        <div className="host_stage_img">
                            <div className="stage_tit">
                                숙소 편의시설 정보를<br />추가해 주세요.
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage6_list">
                                <div className="s6_opt">
                                    <div className="s6_tit">특별히 내세울 만한 편의시설이 있나요?</div>
                                    <div className="s6_sub">
                                        {
                                            roomConvenience["special"].map((v, idx) => (
                                                <div key={idx} className={stage6.includes(v) ? "stage6_on" : ""} onClick={() => onToggleRoomConv(v)}>{v}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="s6_opt">
                                    <div className="s6_tit">다음 인기 편의시설이 있나요?</div>
                                    <div className="s6_sub">
                                        {
                                            roomConvenience["popular"].map((v, idx) => (
                                                <div key={idx} className={stage6.includes(v) ? "stage6_on" : ""} onClick={() => onToggleRoomConv(v)}>{v}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="s6_opt">
                                    <div className="s6_tit">다음 안전 물품이 있나요?</div>
                                    <div className="s6_sub">
                                        {
                                            roomConvenience["safe"].map((v, idx) => (
                                                <div key={idx} className={stage6.includes(v) ? "stage6_on" : ""} onClick={() => onToggleRoomConv(v)}>{v}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(5)}>뒤로</div>
                                <div className="nextBtn" onClick={() => setCurStage(7)}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 7 &&
                (
                    <HostStageBox space>
                        <div className="host_stage_img stage7_img" >
                            <div className="stage_tit">
                                이제 숙소 사진을 올릴<br />차례입니다.
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage7_list">
                                <FirebaseFileUpload handleImageUrl={handleImageUrl} />
                            </div>

                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(6)}>뒤로</div>
                                <div className="nextBtn" onClick={() => setCurStage(8)}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 8 &&
                (
                    <HostStageBox space>
                        <div className="host_stage_img" >
                            <div className="stage_tit">
                                숙소 이름을 만들어주세요.
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage8_list">
                                <div className="s8_tit">숙소 이름 정하기</div>
                                <div className="s8_sub">
                                    <textarea placeholder="Bongcheong-dong, Gwanak-gu의 아늑한 게스트 스위트" value={roomName} onChange={onChangeRoomName} />
                                </div>
                            </div>
                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(7)}>뒤로</div>
                                <div className="nextBtn" onClick={() => setCurStage(9)}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 9 &&
                (
                    <HostStageBox space>
                        <div className="host_stage_img" >
                            <div className="stage_tit">
                                숙소에 대해 설명해 주세요.
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage9_list">
                                <div className="s9_tit">숙소 설명 작성하기</div>
                                <div className="s9_sub">
                                    <textarea value={roomDetailInfo} onChange={onChangeRoomDetailInfo} placeholder="편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을 것입니다." />
                                </div>
                            </div>
                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(8)}>뒤로</div>
                                <div className="nextBtn" onClick={() => { setCurStage(10); onStoreRoomInfo(); }}>다음</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 10 &&
                (
                    <HostStageBox space>
                        <div className="host_stage_img" >
                            <div className="stage_tit">
                                이제 요금을 설정하실<br />차례입니다
                                </div>
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body">
                            <div className="stage10_list">
                                <div className="s10_sub">
                                    <input value={roomPrice} onChange={onChangePrice} type="number" placeholder="₩ 00" />
                                    <div>/박</div>
                                </div>
                            </div>
                            <div className="btn">
                                <div className="beforeBtn" onClick={() => setCurStage(9)}>뒤로</div>

                                {/* 임시로 숙소 저장하기 클릭시 localSTorage에 키 값 저장하기 */}
                                <div className="nextBtn stress" onClick={onClickRegisterRoom}>숙소 저장하기</div>
                            </div>
                            <Link to="/host/homes" className="exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }
            {
                curStage === 11 &&
                (
                    <HostStageBox space>
                        <div className="host_stage_img stage11_img" >
                            <Link to="/" className="logo">
                                <img src="/images/favicon/favicon.png" alt="" />
                            </Link>
                        </div>
                        <div className="host_stage_body stage11">
                            <div className="stage11_list">
                                <div className="s11_tit">호스트가 된 것을 축하합니다!</div>
                                <div className="s11_sub">호스트는 에어비앤비의 중심이라 할 수 있습니다. 이제<br />호스팅의 매력을 경험해 보세요.</div>
                                <div className="writer">- 브라이언 드림</div>
                            </div>
                            <div className="btn celebration">
                                {/* 임시로 홈페이지로 이동. 차후에 호스팅 메인페이지로 이동하게 설정 */}
                                <Link to="/hosting" className="nextBtn stress">다음</Link>
                            </div>
                            <Link to="/host/homes" className="exitBtn s11_exitBtn">나가기</Link>
                        </div>
                    </HostStageBox>
                )
            }

        </BecomeHostBox >
    );
};

export default withRouter(BecomeHostPage); 