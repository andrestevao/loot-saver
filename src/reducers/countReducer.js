export default (state = {
  count: 0,
}, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        count: state.count + 1,
      };

    case 'DECREMENT_COUNT':
      return {
        count: state.count - 1,
      };

    case 'SET_COUNT':
      return {
        count: action.count,
      };

    default:
      return state;
  }
};
