// eslint-disable-next-line
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Titulo Padrão',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg',
    categoria: 'Front End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert('video cadastrado com sucesso');

        history.push('/');
      }}
      >
        <FormField
          label="Título do Vídeo:"
          name="titulo"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="URL:"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria:"
          name="url"
          type="text"
          value={values.categoria}
          onChange={handleChange}
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
