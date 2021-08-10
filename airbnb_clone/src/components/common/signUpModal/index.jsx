import React from 'react';
import { SignUpModalBlock, SignUpModalContent } from './styled';

const SignUpModal = ({ setClearSignUp }) => {
    return (
        <SignUpModalBlock>
            <SignUpModalContent>
                <div className="txt">회원가입이 완료 되었습니다!</div>
                <div className="btn" onClick={() => setClearSignUp(false)}>확인</div>
            </SignUpModalContent>
        </SignUpModalBlock>
    );
};

export default SignUpModal;