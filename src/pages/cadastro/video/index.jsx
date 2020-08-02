import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro Vídeo</h1>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
