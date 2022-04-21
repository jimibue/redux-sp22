import React from "react";
import {connect} from 'react-redux'

class TodoForm extends React.Component {
 // const [name,setName]= useState('')
  state = {name:''}

 handleChange =(e)=>{
    // setName(e.target.value)
    this.setState({name:e.target.value})
 }
 handleSubmit =(e)=>{
    // setName(e.target.value)
    e.preventDefault()
    console.log(this.state.name)
    // add todo to list REDUX WAY dispatch an action
    // {type:"ADD_TODO", todo: this.state.name}
    this.props.dispatch( {type:"ADD_TODO", todo: this.state.name})
 }
 render() {
    return (
      <div>
        <h1>FOrm</h1>
        <form onSubmit={this.handleSubmit}>
            <p>todo name:</p>
            <input value={this.state.name} onChange={this.handleChange}/>
            <button>add</button>
        </form>
      </div>
    );
  }
}

export default connect()(TodoForm)
