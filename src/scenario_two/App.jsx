import React from 'react';
import ReactDom from 'react-dom';

import Sipho from './Sipho';
import Palesa from './Palesa';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.giveSiphoFluff = this.giveSiphoFluff.bind(this);

    this.state = { siphosFluffs: 0 };
  }

  giveSiphoFluff() {
    this.setState({ siphosFluffs: this.state.siphosFluffs + 1 });
  }

  render () {
    return (
      <div>
        <Sipho
          colour="purple"
          fluffs={this.state.siphosFluffs}
          gimmeFluff={this.giveSiphoFluff}
        />
        <hr />
        <Palesa
          siphosFluffs={this.state.siphosFluffs}
          giveSiphoFluff={this.giveSiphoFluff}
        />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('my-app-root'));
