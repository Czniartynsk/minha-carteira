import React from 'react';
import { Routes, Route  } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import { Redirect } from './redirect.routes';

const App: React.FC = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/list/:type" element={<List/>}/>
            <Route 
                path="*" 
                element={<Redirect/>}
            />
        </Routes>
    </Layout>
);

export default App;