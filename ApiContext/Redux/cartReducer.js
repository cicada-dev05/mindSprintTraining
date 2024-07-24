const initialValue={
    item:[]
}

function CartReducer(state=initialValue,action) {
    switch (action.type) {
        case "ADD_ITEM":
          return { ...state,item:[...state.item,action.payload]};
          break;
        case "REMOVE_ITEM":
            return { ...state,item:state.item.filter(item=>item.id!=action.payload)};
          break;
    
        default:
          return state;
          break;
      }
}

export default CartReducer