import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled.div`
    font-size: 64px;
    text-align: center;
    font-family: "Helvetica Neue";
    font-weight: bold;
`

const NavBar = () => {
    return (
        <NavWrapper>
            <Title>
            ONLY.
            </Title>
        </NavWrapper>
    );
};

export default NavBar;