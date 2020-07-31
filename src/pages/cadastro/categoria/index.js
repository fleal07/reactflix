import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const initialValues = {
    name: "",
    description: "",
    color: "#AAAAAA",
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  const setValueCategory = (key, value) =>
    setValues({
      ...values,
      [key]: value,
    });

  const handleChange = (info) => {
    const { getAttribute, value } = info.target;
    setValueCategory(getAttribute("name"), value);
  };

  const handleSubmit = (info) => {
    info.preventDefault();
    setCategories([...categories, values]);
    setValues(initialValues);
  };

  return (
    <PageDefault>
      <h1>Cadastro Categoria: {values.name}</h1>
      <form onSubmit={handleSubmit}>
        
        <FormField 
          label="Nome da Categoria:"
          type="text"
          name="description"
          value={values.name}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.description}
              name="description"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField 
          label="Cor:"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.color}
              name="color"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((categorias, indice) => {
          return <li key={`categorias${indice}`}>{categorias.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
