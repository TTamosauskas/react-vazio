import React, { Component } from 'react';
import { FaReact } from 'react-icons/fa';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
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
      <main role="main">
        <FaReact
          className="animated heartBeat infinite slower p-4"
          color="#84beff"
          size={150}
        />

        <ul>
          {itens.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </main>
    );
  }
}
