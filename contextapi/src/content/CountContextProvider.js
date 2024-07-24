import { createContext, useState } from "react";

export const CountContext = createContext();
 
const CountContextProvier = (props) => {
    // Initial Provider State
    const [count,setCount]=useState(0);
    const updateCount=()=>{
        setCount(count+1)
    }
 
    return (
        <CountContext.Provider value={{count,updateCount }}>
            {props.children}
        </CountContext.Provider>
    );
}
 
export default CountContextProvier;