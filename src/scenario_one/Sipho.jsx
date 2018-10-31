import React from 'react';

class Sipho extends React.Component {
 constructor(props) {
   super(props);
   this.gimmeFluff = this.gimmeFluff.bind(this);

   this.state = { fluffs: 0 };                // knows how much fluff he owns
 }

  gimmeFluff() {                              // knows how to make more fluff
   this.setState({ fluffs: this.state.fluffs + 1 });
 }

 render() {
   return (
     <div>
       <h1>
         Sipho has {this.state.fluffs}
         {this.props.colour} fluff(s)        {/* gets told what colour fluff can make */}
       </h1>
       <button onClick={this.gimmeFluff}>    {/* makes fluff when we tell him to */}
         Generate Fluffs
       </button>
     </div>
   );
 }
}

export default Sipho;
