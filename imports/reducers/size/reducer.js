
const defaultState = {
  height: null,
  width: null,
  position: null,
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case 'UPDATE_SIZE': return { ...state, ...action.payload };
    default: return { ...state };
  }
}
