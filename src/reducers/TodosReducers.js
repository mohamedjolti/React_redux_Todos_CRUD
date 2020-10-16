import  { Add_Todo, Delete_Todo, Fetch_Todo } from "../Actions/ActionsTypes"
import { combineReducers } from 'redux'
import { store } from "../store"

const inistState={
    items:[],
    item:[]
}
function todosReducer(state=inistState,action){
      var payload =action.payload
      switch(action.type){
         case Add_Todo:
             state.items=[...state.items,payload]
             return {...state,item:payload}
         case Fetch_Todo:
            return {...state,items:payload};
          case Delete_Todo:
              state.items=state.items.filter(todo=>todo.id!==payload)
               return {...state};
            default:
                return state
    
        }
    }

const todoApp =combineReducers({
    todos:todosReducer
})

export default todoApp;