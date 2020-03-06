import React from 'react';
import { StyledArticle } from './styles';

function Article({ item }) {
  return <StyledArticle id={item.id}>{item.name}</StyledArticle>;
}

export default Article;
