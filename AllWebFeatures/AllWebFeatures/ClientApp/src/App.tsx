import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Examples from './components/ExamplesPage/ExamplesPage';
import GlassLogin from './components/LoginForm/Glassmorphism/GlassmorphismLoginForm';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/examples' component={Examples} />
        <Route path='/glass_login' component={GlassLogin} />
    </Layout>
);
