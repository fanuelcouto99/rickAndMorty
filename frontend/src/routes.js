import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Persona from './pages/Persona/';
import Attributes from './pages/Attributes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Persona} />
                <Route path="/attributes" component={Attributes} />
            </Switch>
        </BrowserRouter>
    );
}