import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import { CommentBox, MyCommentBox, ProfileBox, ProfileInfoBox, ProfilePageBlock } from './styled';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import StarIcon from '@material-ui/icons/Star';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../store/userInfo';


const ProfilePage = () => {
    const [openModifyBox, setOpenModifyBox] = useState(false);
    const { userId, userData } = useSelector(({ userInfo }) => ({
        userId: userInfo.userIdx,
        userData: userInfo.userData,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        if (!userData) {
            const headers = {
                "x-access-token": localStorage.getItem('ACCESS_TOKEN')
            };
            const loadUser = async () => {
                const response = await axios.get(`https://dev.rodin.club/users/${userId}`, { headers });
                dispatch(getUserInfo(response.data.result));
            }
            loadUser();
        }
    }, [userId, dispatch, openModifyBox, userData]);


    const [myInfo, setMyInfo] = useState({
        userIntro: "",
        userLocation: "",
        userOffice: "",
        userLanguage: "",
    });

    const onChange = (e) => {
        setMyInfo({ ...myInfo, [e.target.name]: e.target.value });
    }

    const onModifyInfo = () => {
        const headers = {
            'x-access-token': localStorage.getItem("ACCESS_TOKEN")
        };

        const modifyUser = async () => {
            await axios.patch(`https://dev.rodin.club/users/${userId}`, myInfo, { headers });
        }
        modifyUser();
        setOpenModifyBox(false);
    }


    return (
        <>
            {
                userData && (
                    <ProfilePageBlock>
                        <Header profile />
                        <div className="profile_body">
                            <ProfileBox>
                                <div className="profileImg">
                                    <img src="/images/icons/profile.png" alt="" />
                                    <div>사진 업데이트하기</div>
                                </div>
                                <div className="verify">
                                    <VerifiedUserOutlinedIcon />
                                    <div className="verify_tit">본인 인증</div>
                                    <div className="verify_txt">본인 인증 배지를 통해 본인 인증을<br /> 마쳤다는 사실을 다른 사용자에게 보여줄<br /> 수 있습니다.</div>
                                    <button>배지 받기</button>
                                </div>
                            </ProfileBox>
                            <ProfileInfoBox>
                                <header>
                                    <div className="title">안녕하세요. 저는 {userData.userName}입니다.</div>
                                    <div className="register">회원 가입 : {userData.createdAt.slice(0, 10)}</div>
                                    <u className={openModifyBox && "open"} onClick={() => setOpenModifyBox(true)}>프로필 수정하기</u>
                                </header>
                                <body>
                                    {
                                        openModifyBox ?
                                            (
                                                <>
                                                    <div className="open_intro">
                                                        <div className="open_tit">소개</div>
                                                        <textarea placeholder={userData.userIntro} onChange={onChange} name="userIntro" />
                                                    </div>
                                                    <div className="open_location">
                                                        <div className="open_tit">위치</div>
                                                        <input name="userLocation" placeholder={userData.userLocation} onChange={onChange} className="inputBox" />
                                                    </div>
                                                    <div className="open_company">
                                                        <div className="open_tit">직장</div>
                                                        <input name="userOffice" placeholder={userData.userOffice} onChange={onChange} className="inputBox" />
                                                    </div>
                                                    <div className="ctrl">
                                                        <button className="cancelBtn" onClick={() => setOpenModifyBox(false)}>취소</button>
                                                        <button className="storeBtn" onClick={onModifyInfo}>저장</button>
                                                    </div>
                                                </>
                                            )
                                            :
                                            (
                                                <>
                                                    {
                                                        userData.userOffice &&
                                                        <div className="intro">
                                                            <div className="intro_tit">소개</div>
                                                            <div className="intro_txt">{userData.userIntro}</div>
                                                        </div>
                                                    }
                                                    {
                                                        userData.userOffice &&
                                                        <div className="info">
                                                            <HomeIcon />
                                                            <div>{userData.userLocation}</div>
                                                        </div>
                                                    }
                                                    {
                                                        userData.userOffice &&
                                                        <div className="info">
                                                            <LocalMallIcon />
                                                            <div>{userData.userOffice}</div>
                                                        </div>
                                                    }
                                                </>
                                            )
                                    }
                                </body>
                                <CommentBox>
                                    <div className="tit">
                                        <StarIcon />
                                        <div>후기 0개</div>
                                    </div>
                                </CommentBox>
                                <MyCommentBox>
                                    <div className="tit">내가 작성한 후기</div>
                                </MyCommentBox>

                            </ProfileInfoBox>

                        </div>
                    </ProfilePageBlock>
                )
            }
        </>
    );
};

export default ProfilePage;