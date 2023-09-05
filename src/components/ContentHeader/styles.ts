import styled from 'styled-components';

interface ITitleContainerProps{
    $lineColor: string;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media(max-width: 425px){
        flex-direction: column;
        align-items: initial;
    }
`;
export const TitleContainer = styled.div<ITitleContainerProps>`
    > h1 {
        color: ${props => props.theme.colors.white};

        &:after{
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.$lineColor};
        }
    }

    @media(max-width: 425px){
        > h1 {
            font-size: 26px;

            &:after{
                content: '';
                display: block;
                width: 55px;
                border-bottom: 8px solid ${props => props.$lineColor};
                margin-bottom: 20px;
            }
        }
    }
`;
export const Controllers = styled.div`
    display: flex;
`;