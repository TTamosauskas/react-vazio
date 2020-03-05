import React, { Component } from 'react';
import { DatePicker, message } from 'antd';
import api from '../../services/api';
import { StyledMain } from './styles';
import 'antd/dist/antd.css';

class Page extends Component {
  state = {
    usuario: {},
  };

  async componentDidMount() {
    const response = await api.get(`/users`);

    this.setState({ usuario: response.data[0] });

    message.info('Mensagem de 3 segundos', 3);
  }

  render() {
    const { usuario } = this.state;

    return (
      <StyledMain>
        <main role="main" className="p-3">
          <article>
            <h2>Apelido: {usuario.name}</h2>
            <p>{usuario.email}</p>

            <DatePicker />
          </article>
        </main>
      </StyledMain>
    );
  }
}

export default Page;
