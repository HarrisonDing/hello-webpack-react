import css from "./app.css"
import {Container} from "./components/Container"
import {Comment} from './components/Comment'


console.log("hello world! 123 abcd");

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

ReactDOM.render(
  <Root></Root>,
  document.getElementById('root')
);

ReactDOM.render(
  <Container> </Container>,
  document.getElementById('container')
);

ReactDOM.render(
  <Comment></Comment>, document.getElementById('comment')
)
