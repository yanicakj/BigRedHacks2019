import React, { Component } from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import Registration from './Registration';
import Board from './Board';
import HelpMap from './HelpMap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Feedback from './Feedback';
import Support from './Support';
import About from './About';

const App = () => (
    <Router>
        <Route exact path="/" component={ResponsiveDrawer}/>
        <Route path="/board/" component={Board}/>
        <Route path="/helpmap/" component={HelpMap}/>
        <Route path="/about/" component={About}/>
        <Route path="/feedback/" component={Feedback}/>
        <Route path="/support/" component={Support}/>
    </Router>
)

export default App;