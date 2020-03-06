import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Article from '../Article';
import { StyledMain } from './styles';

function Main() {
  const [lista, setLista] = useState({});

  useEffect(() => {
    async function loadLista() {
      const response = await api.get('/users');

      setLista(response.data);
    }

    loadLista();
  }, []);

  const listaArray = Object.values(lista);

  return (
    <StyledMain role="main" className="p-4">
      {listaArray.map(item => (
        <Article key={item.name} item={item} />
      ))}
    </StyledMain>
  );
}
export default Main;
