import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 3px;

    border-radius: 7px;
    
    height: 260px;
`;


export const ChartContainer = styled.div`
    flex: 1;
    display: flex;
`;

export const Header = styled.header`
    widht: 100%;

    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 20px;
        padding-left: 17px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    display: flex;
    padding-right: 17px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    margin-left: 7px;

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