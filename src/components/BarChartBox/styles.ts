import styled, {keyframes} from 'styled-components';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateY(100px);
        opacity: 0;
    } 
    50%{
        opacity: .3;
    } 
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    min-height: 260px;

    margin: 10px 0;

    justify-content: space-between;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    
    border-radius: 7px;
    
    display: flex;

    animation: ${animate} .5s;

    @media(max-width: 1200px){
        display: flex;
        flex-direction: column;
        
        width: 100%;
        height: auto;
    }
`;

export const SideLeft = styled.aside`
    width: 56%;
    padding: 30px 3px;

    > h2 {
         padding-left: 17px;
         margin-bottom: 10px;
    }

    @media(max-width: 1200px){
        width: 100%;
        
        > h2 {
            padding-left: 19px;
        }
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 175px;
    padding-right: 15px;

    overflow: scroll;

    @media(max-width: 1200px){
        display: flex;

        height: auto;
        padding-left: 3px;
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    
    align-items: center;

    margin-bottom: 7px;

    padding-left: 17px;

    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        border-radius: 5px;

        font-size: 14px;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 1200px){
        line-height: 30px;
        > div {
            width: 35px;
            height: 35px;
            font-size: 12px;
        }
    }
`;

export const SideRight = styled.main`
    width: 38%;
    min-height: 150px;

    padding-top: 35px;

    @media(max-width: 1200px){
        width: 100%;
    }
`;