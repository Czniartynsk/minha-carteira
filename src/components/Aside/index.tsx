import React from 'react';
import {
    MdOutlineExitToApp,
} from 'react-icons/md';

import { GiWallet } from "react-icons/gi";
import { TbTrendingDown3, TbTrendingUp3 } from "react-icons/tb";

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
} from './styles';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    return (
        <Container>    
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink to="/">
                    <GiWallet/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink to="/list/entry-balance">
                    <TbTrendingUp3></TbTrendingUp3>
                    Entradas
                </MenuItemLink>

                <MenuItemLink to="/list/exit-balance">
                    <TbTrendingDown3></TbTrendingDown3>
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdOutlineExitToApp></MdOutlineExitToApp>
                    Sair
                </MenuItemButton>
            </MenuContainer>    
        </Container>
    );
}

export default Aside;