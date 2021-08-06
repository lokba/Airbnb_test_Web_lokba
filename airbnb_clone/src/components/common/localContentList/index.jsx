import React from 'react';
import { LocalContentListBox } from './styled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Link } from 'react-router-dom';

const LocalContentList = ({ areas }) => {

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


    return (
        <LocalContentListBox>
            {
                areas.map(area => (
                    <Link to={`/rooms/${area.roomId}`} className="localItemBox">
                        <div className="localItem">
                            <div className="localItem_img">
                                <img src={area.imgURL[0]} alt="" />
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
                    </Link>
                ))
            }
        </LocalContentListBox>
    );
};

export default LocalContentList;