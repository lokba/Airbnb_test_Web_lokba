import React from 'react';
import { PaginationBox } from './styled';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Pagination = () => {
    return (
        <PaginationBox>
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
        </PaginationBox>
    );
};

export default Pagination;