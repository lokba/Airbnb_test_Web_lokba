import React from 'react';
import { InputBox } from './styled';

const InputModel = ({ birth_date, txt }) => {
    return (
        <InputBox>
            <div className="inputTit">{txt}</div>
            {
                birth_date ?
                    (<input type="date" />)
                    :
                    (<input placeholder={txt} />)
            }
        </InputBox>
    );
};

export default InputModel;