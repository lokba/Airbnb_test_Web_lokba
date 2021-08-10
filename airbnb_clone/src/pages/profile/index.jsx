import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import { CommentBox, MyCommentBox, ProfileBox, ProfileInfoBox, ProfilePageBlock } from './styled';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import StarIcon from '@material-ui/icons/Star';
import axios from 'axios';
import { useSelector } from 'react-redux';


const ProfilePage = () => {
    const [openModifyBox, setOpenModifyBox] = useState(false);
    const [user, setUser] = useState(null);
    const { userId } = useSelector(({ userInfo }) => ({
        userId: userInfo.userIdx
    }))

    useEffect(() => {
        const headers = {
            "x-access-token": localStorage.getItem('ACCESS_TOKEN')
        }
        const loadUser = async () => {
            const response = await axios.get(`https://dev.rodin.club/users/${userId}`, { headers });
            setUser(response.data.result);
        }
        loadUser();
    }, [userId])
    console.log("user", user);

    return (
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
                        <div className="title">안녕하세요. 저는 {user.userName}입니다.</div>
                        <div className="register">회원 가입 : {user.createdAt.slice(0, 10)}</div>
                        <u className={openModifyBox && "open"} onClick={() => setOpenModifyBox(true)}>프로필 수정하기</u>
                    </header>
                    <body>
                        {
                            openModifyBox ?
                                (
                                    <>
                                        <div className="open_intro">
                                            <div className="open_tit">소개</div>
                                            <textarea name="open_introduction" />
                                        </div>
                                        <div className="open_location">
                                            <div className="open_tit">위치</div>
                                            <input name="location" className="inputBox" />
                                        </div>
                                        <div className="open_company">
                                            <div className="open_tit">직장</div>
                                            <input name="location" className="inputBox" />
                                        </div>
                                        <div className="ctrl">
                                            <button className="cancelBtn" onClick={() => setOpenModifyBox(false)}>취소</button>
                                            <button className="storeBtn">저장</button>
                                        </div>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <div className="intro">
                                            <div className="intro_tit">소개</div>
                                            <div className="intro_txt">fqewfqewgwgweg</div>
                                        </div>
                                        <div className="info">
                                            <HomeIcon />
                                            <div>거주지 : 서울 ,한국</div>
                                        </div>
                                        <div className="info">
                                            <LocalMallIcon />
                                            <div>직장 : ㄹㅂㄷㄹㅂㄷㄹㄹㅂㄷㅈㄹ</div>
                                        </div>
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
    );
};

export default ProfilePage;