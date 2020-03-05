import React, { Component } from 'react';
import api from '../../services/api';
import { StyledComponent } from './styles';

class Page extends Component {
  state = {
    usuario: {},
  };

  async componentDidMount() {
    const response = await api.get(`/users`);

    this.setState({ usuario: response.data[0] });
  }

  render() {
    const { usuario } = this.state;

    return (
      <StyledComponent>
        <main role="main" className="p-3">
          <article>
            <h2>Apelido: {usuario.name}</h2>
            <p>{usuario.email}</p>
            <p>{usuario.phone}</p>
          </article>
        </main>
      </StyledComponent>
    );
  }
}

export default Page;
