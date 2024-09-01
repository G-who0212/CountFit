import React from 'react';
import {styled} from 'styled-components';

function LoginPage(props) {
    return (
        <Container>
            <Title>CountFit</Title>
            <SubTitle>카운트핏과 함께 건강한 첫걸음을 내딛어보세요! 🏃‍♂️</SubTitle>
            <KakaoButton>
                <KakaoIcon />
                카카오로 시작하기
            </KakaoButton>
            <SubText>카카오톡으로 3초 만에 회원가입과 로그인이 가능합니다.</SubText>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 120px);
    background-color: #ffffff;
`;

const Title = styled.div`
    font-size: 80px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 8px;
`;

const SubTitle = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 32px;
    text-align: center;
    line-height: 1.5;
`;

const KakaoButton = styled.div`
    background-color: #ffeb00;
    color: #000000;
    padding: 15px 32px;
    border-radius: 50px; /* 둥근 모서리 */
    font-size: 25px; /* Button font size */
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 24px; /* 간격 조정 */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 */
`;

const KakaoIcon = styled.span`
    background: url('/path/to/kakao-icon.png') no-repeat center center;
    background-size: contain;
    width: 24px;
    height: 24px;
    margin-right: 8px;
`;

const SubText = styled.div`
    font-size: 14px; /* SubText font size */
    margin-top: 16px;
    color: #666666;
`;

export default LoginPage;