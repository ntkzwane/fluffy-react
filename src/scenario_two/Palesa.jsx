import React from 'react';

class Palesa extends React.Component {
  constructor(props) {
    super(props);
    this.state = { charityFluffs: 0 };         // knows how much fluff she’s given to Sipho

    this.giveFluff = this.giveFluff.bind(this);
  }

  giveFluff() {                                // knows how to make fluff for Sipho
    this.setState({ charityFluffs: this.state.charityFluffs + 1 }, () => {
      this.props.giveSiphoFluff();
    });
  }

  render() {
    return (
      <div>
        <h1>
          {/* knows how much fluff Sipho has */}
          Palesa's contributed {this.state.charityFluffs} fluff(s)
          towards Sipho's {this.props.siphosFluffs} fluff(s)
        </h1>
        <button onClick={this.giveFluff}>
          Generate Fluff For Sipho!
        </button>
      </div>
    );
  }
}
export default Palesa;
