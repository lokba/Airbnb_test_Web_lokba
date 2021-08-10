import React from 'react';
import { InputBox } from './styled';

const InputModel = ({ birth_date, txt, name, onChange, signForm }) => {
    return (
        <InputBox>
            <div className="inputTit">{txt}</div>
            {
                birth_date ?
                    (<input type="date" name={name} onChange={onChange} />)
                    :
                    (<input name={name} value={signForm[name]} className={name} placeholder={txt} onChange={onChange} />)
            }
        </InputBox>
    );
};

export default InputModel;