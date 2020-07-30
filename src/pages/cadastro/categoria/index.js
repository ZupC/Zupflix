import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['teste']);
  const valoresIniciais = {
    nome: 'teste',
    descricao: 'teste desc',
    Cor: '#000',
  };
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
          setCategorias([...categorias, nomeDaCategoria]);
        }}
      >
        <div>
          <label>
            Nome da Categoria:
            <input type="text" name="nome" value={values.nome} onChange={handleChange()} />
          </label>
        </div>
        <div>
          <label>
            Descricão:
            <textarea type="text" name="descricao" value={values.descricao} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Cor:
            <input type="color" name="cor" value={values.Cor} onChange={handleChange} />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria}</li>;
        })}
      </ul>
      <Link to="/">Ir para a home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
