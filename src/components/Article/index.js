import React, { Component } from 'react';
import { StyledArticle } from './styles';

class Article extends Component {
  state = {};

  render() {
    return (
      <StyledArticle>
        <article>{this.props.name}</article>
      </StyledArticle>
    );
  }
}

export default Article;
