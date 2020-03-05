import React, { Component } from 'react';
import { StyledComponent } from './styles';

class Article extends Component {
  state = {};

  render() {
    return (
      <StyledComponent>
        <article>{this.props.name}</article>
      </StyledComponent>
    );
  }
}

export default Article;
