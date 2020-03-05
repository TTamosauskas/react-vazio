import React, { Component } from 'react';
import api from '../../services/api';
import Article from '../Article';
import { StyledMain } from './styles';

class Main extends Component {
  state = {
    itens: [],
  };

  componentDidMount() {
    this.loadAPI();
  }

  loadAPI = async () => {
    const response = await api.get('/users');

    this.setState({ itens: response.data });
  };

  render() {
    const { itens } = this.state;

    return (
      <StyledMain role="main" className="p-4">
        {itens.map(item => (
          <Article key={item.id} name={item.name} />
        ))}
      </StyledMain>
    );
  }
}
export default Main;
