import React from 'react';
import { InputBox } from './styled';

const InputModel = ({ birth_date, txt, name }) => {
    console.log("name", name);
    return (
        <InputBox>
            <div className="inputTit">{txt}</div>
            {
                birth_date ?
                    (<input type="date" />)
                    :
                    (<input className={name} placeholder={txt} />)
            }
        </InputBox>
    );
};

export default InputModel;