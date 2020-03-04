import React, {Component} from 'react';
import api from '../../services/api'
import './styles.css';


export default class Main extends Component{

  state = {
    itens:[],
  }

  componentDidMount(){
    this.loadAPI();
  }

  loadAPI = async () => {
    const response = await api.get("/users");
    
    this.setState({ itens: response.data});

  };

render(){
  return (
<main role="main">
  <div>
    <img 
    className="animated heartBeat infinite slower"
    style={{margin:20}}
    width="100vmin" 
    src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="logo" />
  
    <ul>
      {this.state.itens.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
  </main>
  );
}}

