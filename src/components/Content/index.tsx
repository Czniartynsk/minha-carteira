import React from 'react';

import { Container } from './styles';

const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Container>    
            {children}
        </Container>
    );
}

export default Content;