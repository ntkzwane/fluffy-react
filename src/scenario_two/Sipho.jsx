import React from 'react';

const Sipho = ({ colour, fluffs, gimmeFluff }) => (
  <div>
    <h1>Sipho has {fluffs} {colour} fluff(s)</h1>
    <button onClick={gimmeFluff}>Generate Fluff!</button>
  </div>
);

export default Sipho;
