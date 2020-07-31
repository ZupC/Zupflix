import { useState } from 'react';

function useForm(valoresIniciais) {
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
  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
