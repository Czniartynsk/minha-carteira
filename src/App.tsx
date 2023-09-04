import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import { useTheme } from './hooks/theme';

//import Routes from './routes';
import Rotas from './routes';

const App: React.FC = () => {
    const {theme} = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Rotas/> 
        </ThemeProvider>
    );
}

export default App;