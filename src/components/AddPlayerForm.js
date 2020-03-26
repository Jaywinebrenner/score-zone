import React, { Component } from 'react';


class AddPlayerForm extends Component {

  state = {
    inputValue: ''
  }

  handleValueChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.inputValue);
    this.setState({ inputValue: ''})
  }

  render() {
console.log(this.state.inputValue);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        value={this.state.inputValue}
        onChange={this.handleValueChange}
        placeholder="Enter a player's name"
        />

        <input
        type="submit"
        value='Add Player'
        />

      </form>

    )

  }
}


export default AddPlayerForm
