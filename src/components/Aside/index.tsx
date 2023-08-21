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
                <MenuItemLink href="/dashboard">
                    <GiWallet></GiWallet>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <TbTrendingUp3></TbTrendingUp3>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <TbTrendingDown3></TbTrendingDown3>
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdOutlineExitToApp></MdOutlineExitToApp>
                    Sair
                </MenuItemLink>
            </MenuContainer>    
        </Container>
    );
}

export default Aside;