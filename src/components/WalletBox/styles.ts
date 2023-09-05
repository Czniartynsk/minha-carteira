import styled, {keyframes} from 'styled-components';

interface IContainerProps{
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateY(-100px);
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

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height: 150px;

    margin: 10px 0;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    border-radius: 5px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    > img {
        height: 110%;

        position: absolute;
        top: -10px;
        right: -30px;

        opacity: .3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > h1 > strong {
        font-size: 20px;
        margin-right: 5px;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    animation: ${animate} .5s;

    @media(max-width: 990px){
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            strong {
                display: inline-block;
                width: 100%;
                font-size: 16px;
            }

        }
    }

    @media(max-width: 461px){
        width: 100%;

        > h1 {
            display: flex;
            
            strong {
                position: initial;
                width: auto;
                font-size: 22px;
                padding-right: 8px;
            }

            
        }
    }
`;