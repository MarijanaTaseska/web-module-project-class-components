import React from 'react'
import Form  from './Form'
import TodoList from './TodoList'

 let id =0
 let getId = ()=> ++id
const initialTodos = [
  {id: getId(), name:'Walk the Dog',completed:false},
  {id: getId(), name:'Buy snacks',completed:false},
  {id: getId(), name:'Do homework',completed:false},
  {id: getId(), name:'Learn Coding',completed:false}
]

export default class App extends React.Component {
  state= {
    todos:initialTodos,
  }
addTodo = (name) => {
this.setState({
  ...this.state,
  todos:this.state.todos.concat({id:getId(), completed:false, name })
 })
}

completeTaskToggle = id =>{
  this.setState({
    ...this.state,
    todos: this.state.todos.map( td =>{
 if(id == td.id) return {...td, completed:!td.completed}
 return td
  })
  })
}
  
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} completeTaskToggle={this.completeTaskToggle}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}

