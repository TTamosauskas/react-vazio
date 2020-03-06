import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import api from '../../services/api';
import Article from '../Article';
import { StyledMain } from './styles';

function Main() {
  const [lista, setLista] = useState(null);

  useEffect(() => {
    async function loadLista() {
      const response = await api.get('/users');

      setLista(response.data);
    }

    loadLista();
  }, []);

  if (lista === null) {
    return <Spin size="large" />;
  }

  return (
    <StyledMain role="main" className="p-3">
      {lista.map(item => (
        <Article key={item.name} item={item} />
      ))}
    </StyledMain>
  );
}
export default Main;
