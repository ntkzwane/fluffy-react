import React from 'react';
import ReactDom from 'react-dom';

import Sipho from './Sipho';

class App extends React.Component {
  render() {
    return React.createElement('h1', null, 'It\'s so fluffy!!!');
  }
}

ReactDom.render(
  React.createElement(App, null, null),
  document.getElementById('my-app-root')
);

