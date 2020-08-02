import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/index';
import FormField from '../../../components/FormField/index';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#AAAAAA',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValueCategory(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(info) {
    setValueCategory(info.target.getAttribute('name'), info.target.value);
  }

  function handleSubmit(info) {
    info.preventDefault();
    setCategories([...categories, values]);
    setValues(initialValues);
  }

  // Usa dois parâmetros
  // 1-O que queremos q aconteça
  // 2-Quando a gente quer q aconteça []Array (Pode ou não passar este parâmetro)
  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://lealflix.herokuapp.com/categorias';
      // 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaServidor) => {
          if (respostaServidor.ok) {
            const resposta = await respostaServidor.json();
            setCategories(resposta);
            return;
          }
          throw new Error('Não foi possível carregar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro Categoria :
        {values.name}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria:"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((categorias, indice) => <li key={`categorias${indice}`}>{categorias.titulo}</li>)}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
