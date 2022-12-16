import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Examples from './components/ExamplesPage/ExamplesPage';
import GlassLogin from './components/LoginForm/Glassmorphism/GlassmorphismLoginForm';
import DockerPage from './components/Tutorials/Docker';
import JenkinsPage from './components/Tutorials/Jenkins';
import KuberPage from './components/Tutorials/Kubernetis/Kubernetis';
import MultithreadingPage from './components/Tutorials/Multithreading/Multithreading';
import TableWithScroll from './components/TableExamples/TableWithScroll';
import CustomDropDown from './components/DropDowns/CustomDropDown';
import MultiDropDown from './components/DropDowns/MultiDropDown';
import TicTacToe from './components/TicTacToe/TicTacToe';
import FlipCards from './components/FlipCards/FlipCards';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/examples' component={Examples} />
        <Route path='/glass_login' component={GlassLogin} />
        <Route path='/docker_page' component={DockerPage} />
        <Route path='/jenkins_page' component={JenkinsPage} />
        <Route path='/kuber_page' component={KuberPage} />
        <Route path='/table_with_scroll' component={TableWithScroll} />
        <Route path='/custom_dropdown' component={CustomDropDown} />
        <Route path='/multi_dropdown' component={MultiDropDown} />
        <Route path='/tic_tac_toe' component={TicTacToe} />
        <Route path='/flip_cards' component={FlipCards} />
        <Route path='/multithreading' component={MultithreadingPage} />
    </Layout>
);
