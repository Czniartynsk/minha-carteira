import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

const Dashboard: React.FC = () => {
    
    const options = [
        {value: 'Bruno', label: 'Bruno'},
        {value: 'Czniartynsk', label: 'Czniartynsk'},
        {value: 'Jax de Kombi', label: 'Jax de Kombi'},
    ];
    const frutas = [
        {value: 'Maça', label: 'Maça'},
        {value: 'Caqui', label: 'Caqui'},
        {value: 'Abacaxi', label: 'Abacaxi'},
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options} onChange={() => {}}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;