import React, { Component } from 'react';
import { FaReact } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import api from '../../services/api';
import Article from '../Article';
import './styles.css';

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
      <main role="main" className="p-4">
        <FaReact
          className="animated heartBeat infinite slower p-4"
          color="#84beff"
          size={150}
        />

        {itens.map(item => (
          <Article key={item.id} name={item.name} />
        ))}
      </main>
    );
  }
}
export default Main;
