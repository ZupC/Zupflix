import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setvalue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }
  function handleChange(e) {
    setvalue(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          value={values.nome}
          onChange={handleChange}
          name="nome"
          type="text"
          label="Nome da Categoria:"
          inputTag="input"
        />
        <FormField
          value={values.Descricao}
          onChange={handleChange}
          name="nome"
          type="area"
          label="Descricão:"
          inputTag="textarea"
        />
        <FormField value={values.Cor} onChange={handleChange} name="nome" type="color" label="Cor:" inputTag="input" />

        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir para a home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
