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
    const todo = {id:this.props.id, name: this.state.name}
    this.props.dispatch( {type:"ADD_TODO", todo: todo, complete:false})
    this.props.dispatch( {type:"INC_ID"})
    this.setState({name:''})
 }
 render() {
    return (
      <div>
        <h1>FOrm</h1>
        <p>nextID value: {this.props.id}</p>
        <form onSubmit={this.handleSubmit}>
            <p>todo name:</p>
            <input value={this.state.name} onChange={this.handleChange}/>
            <button>add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {id: state.nextId}
}
export default connect(mapStateToProps)(TodoForm)
