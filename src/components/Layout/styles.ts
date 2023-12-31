import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;

    /**
    * Layout
    * MH = Main Header
    * AS = Aside
    * CT = Content
    */

    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
    'AS MH'
    'AS CT';

    height: 100vh;

    /**
     * Tornando Responsivo
    */
    @media(max-width: 770px){
      grid-template-columns: 100%;
      grid-template-rows: 70px auto;

      grid-template-areas: 
      'MH'
      'CT';
    }

  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width:10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-corner{
    background-color: ${props => props.theme.colors.transparent};
  }
`;