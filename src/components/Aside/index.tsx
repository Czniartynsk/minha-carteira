import React, { useState } from 'react';
import Toggle from '../Toggle';

import {
    MdOutlineExitToApp,
    MdClose,
    MdMenu,
} from 'react-icons/md';

import { GiWallet } from "react-icons/gi";
import { TbTrendingDown3, TbTrendingUp3 } from "react-icons/tb";

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter,
} from './styles';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    
    
    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>    
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuIsOpened ? <MdClose/> : <MdMenu/> }
                </ToggleMenu>

                <LogImg src={logoImg} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink to="/" onClick={handleToggleMenu}>
                    <GiWallet/>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink to="/list/entry-balance" onClick={handleToggleMenu}>
                    <TbTrendingUp3></TbTrendingUp3>
                    Entradas
                </MenuItemLink>

                <MenuItemLink to="/list/exit-balance" onClick={handleToggleMenu}>
                    <TbTrendingDown3></TbTrendingDown3>
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdOutlineExitToApp></MdOutlineExitToApp>
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft='Light'
                    labelRight='Dark'
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>    
        </Container>
    );
}

export default Aside;