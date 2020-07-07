import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pesquisa from './pages/Pesquisa';
// import NewIncident from './pages/NewIncident'

export default function Routes() {// rotas tambem sao componentes por isso sao exportadas
    return (
        <BrowserRouter>
            <Switch>    
                <Route path="/" exact component={Home} /> 
                <Route path="/sobre" component={Sobre} />
                <Route path="/pesquisa" component={Pesquisa} />
                {/* <Route path="/incident/new" component={NewIncident} /> */}

            </Switch>        
        </BrowserRouter>
    )// o exact é para que o caminho seja exatamento este
}