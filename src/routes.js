import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pesquisa from './pages/Pesquisa';
import Registro from './pages/Registro'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>    
                <Route path="/" exact component={Home} /> 
                <Route path="/sobre" component={Sobre} />
                <Route path="/pesquisa" component={Pesquisa} />
                <Route path="/registro" component={Registro} />

            </Switch>        
        </BrowserRouter>
    )
}