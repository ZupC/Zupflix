import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://familyflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (e) => {
        const resposta = await e.json();
        setCategorias([...resposta]);
      });
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
          clearForm();
        }}
      >
        <FormField
          value={values.nome}
          onChange={handleChange}
          name="nome"
          type="text"
          label="Nome da Categoria:"
        />
        <FormField
          value={values.Descricao}
          onChange={handleChange}
          name="Descricao"
          type="textarea"
          label="Descricão:"
        />
        <FormField value={values.Cor} onChange={handleChange} name="Cor" type="color" label="Cor:" />

        <Button type="button">Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>{categoria.titulo}</li>
        ))}
      </ul>
      <Link to="/">Ir para a home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
