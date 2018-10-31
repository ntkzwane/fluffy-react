const initialState = {
  siphosFluffs: 0,
  charityFluffs: 0
};

export function fluffs(state = initialState, action) {
  switch (action.type) {
    case 'GIMME_FLUFF':
      return {
        ...state,
        siphosFluffs: state.siphosFluffs + 1
      };

    case 'GIVE_SIPHO_FLUFF':
      return {
        ...state,
        siphosFluffs: state.siphosFluffs + 1,
        charityFluffs: state.charityFluffs + 1
      };

    default:
      return state;
  }
}

