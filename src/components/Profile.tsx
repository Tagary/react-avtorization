import React, { FC } from 'react';
import styled from 'styled-components';
import { useActions } from '../hooks/useActions';



const ProfileWrapper = styled.div`
width: 100%;
min-width: 100vw;
min-height: calc(100vh - 50px);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.div`
    font-size: 40px;
    margin-bottom: 50px;
`

const UserName = styled.span`
    font-size: 40px;
    font-weight: bold;
`
const Button = styled.button`
color: #000;
background-color: #F5F5F5;
border-radius: 8px;
padding: 15px;
font-weight: bold;
cursor: pointer;

`


const Profile: FC = () => {

    const { logout } = useActions();

    let nameUser = localStorage.getItem('name');

    return (
        <ProfileWrapper>
            <Title>
                Здраствуйте, <UserName>{nameUser}</UserName>
            </Title>
            <Button onClick={logout}>
                Выйти
            </Button>
        </ProfileWrapper>
    );
};

export default Profile;