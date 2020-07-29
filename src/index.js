import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Home from "./pages/Home";

import {
  BrowserRouter, Switch,
  Route,
} from "react-router-dom";

import CadastroVideo from "./pages/cadastro/video";
import CadastroCategoria from "./pages/cadastro/categoria";

//Desafio master de implementar a pagina de erro
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

      {/* Quando não utiliza a propriedade path no Route, vc define a rota da página de erro (404) */}
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
