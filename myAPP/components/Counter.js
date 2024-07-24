import { useState } from "react";
function CounterComponent() {
    const [counter, setCounter] = useState(0)  
    
    function incrementCounter() {
        setCounter(counter+1)
    }    
    function decrementCounter() {
        if (counter == 0) {
            setCounter(0) 
            alert('Counter cannot be zero')
        } else {
            
            setCounter(counter-1)
        }
    }

    const [isToggle, setIsToggle] = useState(true) 
    function Toggle() {
        if(isToggle ==  true) setIsToggle(false)
        else setIsToggle(true)
    }
    
    // export default Toggle;
    return ( 
        <>
        <div className="container">
            <center>
            <h3>Counter :</h3>
            <h3>{counter}</h3>
            <button className="btn btn-success m-3" onClick={incrementCounter}>Click me to increase</button>
            <button  className="btn btn-danger m-3" onClick={decrementCounter}>Click me to Decrement</button>
            <h1>{isToggle?'ON' : 'OFF'} </h1>
            <button className="btn btn-secondary" onClick={Toggle}>Click me</button>
            </center>
        </div>
        </>
     );
}

export default CounterComponent;