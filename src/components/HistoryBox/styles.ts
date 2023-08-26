import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;
    
    height: 260px;
`;


export const ChartContainer = styled.div`
    flex: 1;
    display: flex;
`;

export const Header = styled.header`
    > h2 {
        margin-bottom: 20px;
        padding-left: 17px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;
`;

export const Legend = styled.li``;