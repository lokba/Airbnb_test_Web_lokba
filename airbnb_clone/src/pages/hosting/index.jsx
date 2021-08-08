import React from 'react';
import Header from '../../components/common/Header';
import HostingHeader from '../../components/common/HostingHeader';
import { HostingPageBox } from './styled';

const HostingPage = () => {
    return (
        <HostingPageBox>
            <HostingHeader />
        </HostingPageBox>
    );
};

export default HostingPage;