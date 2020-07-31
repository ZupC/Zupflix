import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:3000' : 'https://familyflix.herokuapp.com/categorias';
    fetch(URL).then(async (e) => {
      const resposta = await e.json();
      setCategorias([...resposta]);
    });

    // setTimeout(() => {
    //   setCategorias([...categorias, {
    //     id: 1,
    //     nome: 'Front End',
    //     descricao: 'Uma categoria bacanudassa',
    //     cor: '#CBD1FF',
    //   },
    //   {
    //     id: 2,
    //     nome: 'Back End',
    //     descricao: 'Outra categoria bacanudassa',
    //     cor: '#CBD1FF',
    //   }]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

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
          type="textarea"
          label="Descricão:"
          inputTag="textarea"
        />
        <FormField value={values.Cor} onChange={handleChange} name="nome" type="color" label="Cor:" inputTag="input" />

        <Button type="button">Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>{categoria.nome}</li>
        ))}
      </ul>
      <Link to="/">Ir para a home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
