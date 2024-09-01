import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <Container>
            <Logo>CountFit</Logo>
            <Login onClick={handleLogin}>로그인</Login>
        </Container>
    );
}

const Container = styled.div`
    //background-color: yellow;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    /* box-shadow: 0px 4px 2px -2px gray; */
`

const Logo = styled.div`
    font-size: 36px;
    font-weight: bold;
    cursor: default;
`;

const Login = styled.div`
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
`;

export default Navbar;