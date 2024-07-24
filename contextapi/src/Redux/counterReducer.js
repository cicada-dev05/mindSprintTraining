const initialValue = {
  count: 0,
};
const CounterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
      break;
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
      break;

    default:
      return state;
      break;
  }
};

export default CounterReducer;