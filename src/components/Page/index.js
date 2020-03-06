import React, { useState, useEffect } from 'react';
import { Spin, DatePicker, message } from 'antd';
import { StyledMain } from './styles';
import api from '../../services/api';
import 'antd/dist/antd.css';

function Page() {
  const [usuario, setUsuario] = useState(null);

  console.log(usuario);

  useEffect(() => {
    message.info('Mensagem de 3 segundos', 3);

    async function loadUsuario() {
      const response = await api.get('/users');

      setUsuario(response.data[0]);
    }

    loadUsuario();
  }, []);

  if (usuario === null) {
    return <Spin size="large" />;
  }

  return (
    <StyledMain role="main" className="p-3">
      <article>
        <h2>{usuario.name}</h2>
        <p>Apelido: {usuario.username}</p>
        <p>{usuario.email}</p>
        <DatePicker />
      </article>
    </StyledMain>
  );
}

export default Page;
