import React, { Component } from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import Registration from './Registration';
import Board from './Board';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <Router>
        <Route exact path="/" component={ResponsiveDrawer}/>
        <Route path="/board/" component={Board}/>
        <Route path="/register/" component={Registration}/>
    </Router>
)

export default App;