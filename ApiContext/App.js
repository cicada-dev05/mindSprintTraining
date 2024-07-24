import { useSelector } from 'react-redux';
import './App.css';
import CounterComponent from './content/CounterComponent';
import Cart from './Redux/Cart';

function App() {
const cart = useSelector(state=>state.cart.item)
  return (
    <div className="App">
     <CounterComponent/>
     <h4>Item in Cart: {cart.length}</h4>
     <p>{JSON.stringify(cart)}</p>
     <Cart/>
    </div>
  );
}

export default App;
