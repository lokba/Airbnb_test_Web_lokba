import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/common/Header';
import { LocalBox, LocalContentHeader } from './styled';

const LocalSearchPage = ({ location }) => {

    const [area, setArea] = useState(null);

    useEffect(() => {
        setArea(searchParam('location'));
    }, []);

    function searchParam(key) {
        return new URLSearchParams(location.search).get(key);
    };

    return (
        <LocalBox>
            <Header />
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
        </LocalBox >
    );
};

export default withRouter(LocalSearchPage);