import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HostingHeader from '../../components/common/HostingHeader';
import { HostingListBlock } from './styled';
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

    }, [userIdx])


    return (
        <HostingListBlock>
            <HostingHeader />
            fefe
        </HostingListBlock>
    );
};

export default HostingListPage;