import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

interface IContainerProps{
    menuIsOpen: boolean;
}

interface IThemeToggleFooter{
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    
    background-color: ${props => props.theme.colors.secondary};

    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 770px){
        padding-left: 7px;
        position: fixed;
        z-index: 2;

        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;
        
        padding-left: 18px;
        
        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const LogImg = styled.img`
    width: 40px;
    height: 40px;

    @media(max-width: 770px){
        width: 35px;
        height: 35px;

        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled(Link)`
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    margin: 7px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    > svg{
        font-size: 18px;
        margin-right: 5px;
    }
`;


export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};

    border: none;
    background: none;

    margin: 7px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    > svg{
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning}

    transition: opacity .3s;

    &:hover{
        opacity: 0.7;
    }

    display: none;

    @media(max-width: 770px){
        padding: 10px;
        padding: 10px;

        display: flex;
    
        justify-content: center;
        align-items: center;
    }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooter>`
    display: none;
    position: absolute;
    bottom: 30px;

    color: ${props => props.theme.colors.white};

    @media(max-width: 770px){
        display: ${props => props.menuIsOpen ? 'flex' : 'none'}
    }
`;
