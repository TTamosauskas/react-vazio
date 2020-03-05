import React, { Component } from 'react';
import './styles.css';

class Article extends Component {
  state = {};

  render() {
    return <article>{this.props.name}</article>;
  }
}

export default Article;
