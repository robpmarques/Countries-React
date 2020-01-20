import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Main from './Pages/Main';
import Detail from './Pages/Detail';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/detail/:countryCode" component={Detail} />
    </Switch>
</BrowserRouter>,
document.getElementById('root'));