import styled, {keyframes} from 'styled-components';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateX(100px);
        opacity: 0;
    } 
    50%{
        opacity: .3;
    } 
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;
    justify-content: space-between;

    animation: ${animate} .5s;

    @media(max-width: 916px){
        width: 100%;
        height: 180px;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px 0px 0px 20px;

    width: 48%;

    > h2 {
        margin-bottom: 30px;
    }

    @media(max-width: 916px){
        padding: 15px;

        > h2 {
            margin-bottom: 10px;
        }
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 155px;

    overflow: scroll;

    
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;

    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        border-radius: 5px;

        font-size: 14px;
        line-height: 38px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }
`;

export const SideRight = styled.main`
    width: 48%;
    justify-content: center;
`;