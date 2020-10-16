import { store } from "../store";
import { Add_Todo, Delete_Todo, Fetch_Todo } from "./ActionsTypes";

export const add_todo=(txt)=>(dispatch)=>{
    var action={
         type:Add_Todo,
         payload:{
             id:store.getState().todos.items[store.getState().todos.items.length-1].id+1,
             title:txt,
             completed:false
         }
     }
  return   dispatch(action)
} 
export  function fetchTodos() {  
    return dispatch => {  
        console.log("add todo");
        return dispatch({  
            type: Fetch_Todo,
            payload:[{
                id:1,
                title:"todo 1",
                completed:false
            },
            {
                id:2,
                title:"todo 2",
                completed:true
            }
        
        
        ]  
        });  
    }  
}; 

export function deleteTodo(id){
    return dispatch=>{
        console.log("delete todo"+id);
        return dispatch({
            type:Delete_Todo,
            payload:id
        })
    }
}