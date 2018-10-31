import React from 'react';

const Palesa = ({ charityFluffs, siphosFluffs, giveFluff }) => (
  <div>
    <h1>
      Palesa's contributed {charityFluffs} fluff(s)
      towards Sipho's {siphosFluffs} fluff(s)
    </h1>
    <button onClick={giveFluff}>
      Generate Fluff For Sipho!
    </button>
  </div>
);

export default Palesa;
