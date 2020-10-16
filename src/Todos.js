import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTodos ,add_todo,deleteTodo} from './Actions/Actions.js'

class Todos extends Component {
    constructor(props){
           super(props);
           this.state={
               title:""
           }
           this.onChange=this.onChange.bind(this)
           this.submit=this.submit.bind(this)

    }
    componentWillMount(){
        this.props.fetchTodos();
       }
       onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit(event){
        console.log("submit");
        event.preventDefault();
        this.props.add_todo(this.state.title)
        this.state.title=""

    }
    componentWillReceiveProps(nexProps){
              if(nexProps.todo){
                     this.props.todos.unshift(nexProps.todo)
              }
        
         
    }

    render() {
       const todos=this.props.todos.map(todo=>(
           <div>
             <div className="collection-item">
       <a href="#!" key={todo.id} ><span className="badge"><button type="submit" className="waves-effect #f44336 red btn" onClick={()=>this.props.deleteTodo(todo.id)}>delete</button></span>{todo.title} ({todo.id})        </a>
    </div>
    
           </div>
           )
       )
        return (
            
            <div className="container">
                <form onSubmit={this.submit}>
                    <input value={this.state.title} onChange={this.onChange} placeholder="addTod" name="title"/>
                    <button className="waves-effect waves-light btn" type="submit">add todo</button>
                </form>
                <div className="collection">
                {todos}

                </div>
            </div>
        )
    }
}
const mapstatetoprops=state=>({
    todos:state.todos.items,
    todo:state.todos.item
})

export default connect(mapstatetoprops,{fetchTodos,add_todo,deleteTodo},)(Todos)