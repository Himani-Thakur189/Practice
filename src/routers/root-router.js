import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom';
import Home from '../screens/Home'
import ViewData from '../screens/ViewData';
const RootRouter = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route path='/viewdata' component={ViewData} />
        </BrowserRouter>
    );
}

export default RootRouter;