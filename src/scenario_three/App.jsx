import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import * as actions from './actions';
import { fluffs } from './reducer';
import Sipho from './Sipho';
import Palesa from './Palesa';

const App = ({ siphosFluffs, charityFluffs, gimmeFluff, giveSiphoFluff }) => (
  <div>
    <Sipho
      colour="purple"
      fluffs={siphosFluffs}
      gimmeFluff={gimmeFluff}
    />
    <hr />
    <Palesa
      siphosFluffs={siphosFluffs}
      charityFluffs={charityFluffs}
      giveFluff={giveSiphoFluff}
    />
  </div>
);

const mapStateToProps = state => ({
  siphosFluffs: fluffs(state, {}).siphosFluffs,
  charityFluffs: fluffs(state, {}).charityFluffs
});
const mapDispatchToProps = dispatch => ({
  giveSiphoFluff: () => dispatch(actions.giveSiphoFluff()),
  gimmeFluff: () => dispatch(actions.gimmeFluff())
});
const store = createStore(fluffs);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('my-app-root')
);

