import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/common/Header';
import { LocalBox } from './styled';

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

        </LocalBox>
    );
};

export default withRouter(LocalSearchPage);