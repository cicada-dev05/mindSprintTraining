import { useDispatch, useSelector } from "react-redux";

function CounterComponent() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch()
  function handleDecre() {
    dispatch({type:'DECREMENT'})
  }function handleIncr() {
    dispatch({type:'INCREMENT'})
  }
  return (
    <>
      <div>
        <h3>Counter Component {count}</h3>
        <button onClick={handleIncr}>increment</button>
        <button onClick={handleDecre}>Decrement</button>
      </div>
    </>
  );
}

export default CounterComponent;
