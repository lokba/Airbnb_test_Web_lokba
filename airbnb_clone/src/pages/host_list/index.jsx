import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HostingHeader from '../../components/common/HostingHeader';
import { HostingListBlock, HostingListBox } from './styled';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

const HostingListPage = () => {
    const { userIdx } = useSelector(({ userInfo }) => ({
        userIdx: userInfo.userIdx
    }));
    const [myRoom, setMyRoom] = useState(null);

    useEffect(() => {
        const loadMyRooms = async () => {
            const response = await axios.get(`https://dev.rodin.club/rooms/users/${userIdx}`);
            setMyRoom(response.data.result);
        }
        loadMyRooms();
    }, [userIdx]);

    useEffect(() => {
        console.log(myRoom);
    }, [myRoom])

    return (
        <>
            {
                myRoom && (
                    <HostingListBlock>
                        <HostingHeader />
                        <HostingListBox>
                            <header>
                                <div className="tit">나의 숙소 {myRoom.length}개</div>
                                <button>
                                    <AddIcon />
                                    <div>숙소 새로 등록하기</div>
                                </button>
                            </header>
                            <nav className="roomItem">
                                <div className="imgSector">숙소</div>
                                <div className="statusSector">상태</div>
                                <div className="bedroomSector">침실</div>
                                <div className="bedSector">침대</div>
                                <div className="bathroomSector">욕실</div>
                                <div className="locationSector">위치</div>
                                <div className="updateSector">최종 수정일</div>
                            </nav>
                            <body>
                                {
                                    myRoom.map(({
                                        roomImageUrl,
                                        roomName,
                                        status,
                                        roomBedroom,
                                        roomBed,
                                        roomBathroom,
                                        roomLocation,
                                        updatedAt,
                                    }) => (
                                        <div className="roomItem">
                                            <div className="imgSector">
                                                <img src={roomImageUrl} alt="" />
                                                <div>{roomName}</div>
                                            </div>
                                            <div className="statusSector">
                                                {
                                                    status === "N" ? "등록 중" : "등록 상태"
                                                }
                                            </div>
                                            <div className="bedroomSector">{roomBedroom}</div>
                                            <div className="bedSector">{roomBed}</div>
                                            <div className="bathroomSector">{roomBathroom}</div>
                                            <div className="locationSector">{roomLocation}</div>
                                            <div className="updateSector">{updatedAt.slice(0, 10)}</div>
                                        </div>
                                    ))
                                }
                            </body>
                        </HostingListBox>
                    </HostingListBlock>
                )
            }
        </>
    )
};

export default HostingListPage;