import { useDispatch, useSelector } from "react-redux";

function Cart () {
    const dispatch = useDispatch()
    const array = [
        {
          id: 1,
          name: "Vivek's Brain",
        },
        {
          item: 2,
          name: "eraser",
        },
      ];
    return ( <>
    {array.map(item=>(
        <div key={item.id}>
            <h3>{item.name}</h3>
            <button onClick={()=>dispatch({type:'ADD_ITEM',payload:item}) }>ADD TO CART</button>
            <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:item.id}) }>REMOVE FROM CART</button>
        </div>
    ))}
    </> );
}

export default Cart ;