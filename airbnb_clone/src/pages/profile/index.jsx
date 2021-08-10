import React from 'react';
import Header from '../../components/common/Header';
import { ProfileBox, ProfileInfoBox, ProfilePageBlock } from './styled';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';

const ProfilePage = () => {
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

                </ProfileInfoBox>

            </div>
        </ProfilePageBlock>
    );
};

export default ProfilePage;