import CartReducer from './cartReducer'
import CounterReducer from './counterReducer'
import {combineReducers } from 'redux'


const rootReducer = combineReducers({
    counter: CounterReducer,
    cart:CartReducer
})

export default rootReducer