import React from 'react';
import {
    MdOutlineExitToApp,
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';

import { GiWallet } from "react-icons/gi";
import { TbTrendingDown3, TbTrendingUp3 } from "react-icons/tb";

import logoImg from '../../assets/logo.svg';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink
} from './styles';

const Aside: React.FC = () => {
    return (
        <Container>    
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink to="/dashboard">
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

                <MenuItemLink to="#">
                    <MdOutlineExitToApp></MdOutlineExitToApp>
                    Sair
                </MenuItemLink>
            </MenuContainer>    
        </Container>
    );
}

export default Aside;