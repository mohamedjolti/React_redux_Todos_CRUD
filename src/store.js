import thunk from 'redux-thunk';
import { createStore ,applyMiddleware} from 'redux'
import todoApp from './reducers/TodosReducers';
const middleware=[thunk]
const initialState=[]
export const store=createStore(todoApp,initialState,applyMiddleware(...middleware));