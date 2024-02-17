import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {id,name,completed}=this.props.todo
    const {completeTaskToggle} = this.props
    return (
      <div onClick={()=> completeTaskToggle(id)}>
        {name} {completed && '✔'}
      </div>
    )
  }
}
