import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import {
  BrowserRouter, Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home/index';

import CadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/categoria/index';

// Desafio master de implementar a pagina de erro
const Pagina404 = () => (
  <div>
    <h1>Página 404</h1>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      {/* Quando não utiliza a prop path no Route, vc define a rota da página de erro (404) */}
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
