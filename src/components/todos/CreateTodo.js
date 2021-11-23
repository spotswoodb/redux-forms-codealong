import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor(){
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: "ADD_TODO", payload: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input 
            type="text" 
            placeholder="add todo"
            onChange={(event) => this.handleChange(event)} 
            value={this.state.text}
            />
            <input type="submit" />
          </p>
        </form>   
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToDo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
//   }
// }

export default connect()(CreateTodo);
