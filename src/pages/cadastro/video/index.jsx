import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField/index';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();

  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jWur1VrxNUg',
    categoria: 'Front End',
  });

  function handleSubmit(event) {
    event.preventDefault();

    videoRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: 1,
    })
      .then(() => {
        history.push('/');
      });
  }
  return (
    <PageDefault>
      <h1>Cadastro Vídeo</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo:"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Url:"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria:"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
