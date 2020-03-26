
// component that grabs the value of an imput

class ControlledInput extends Component {
  state = {
    value: ' '
  };
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <input
        type="text"
        value={ this.state.value }
        onChange={ this.handleChange }
      />
    );
  }
}
