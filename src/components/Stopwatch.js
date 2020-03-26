// Treehouse Video Update the Stopwatch State with componenetDidMount


import React, { Component } from 'react';


class Stopwatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };


// componentDidMount fires the function right away - during the mounting of the component.
  componentDidMount() {
    this.intervalID = setInterval( () => this.tick(), 100);
  }

  ccompoomponentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    if(this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  }

// THIS TOGGLES THE START / STOP BUTTON USING THE ! (LOGICAL NOT OPERATOR)
handleStopwatch = () => {
  this.setState( prevState => ({
    isRunning: !this.state.isRunning
  }));
  if(!this.state.isRunning) {
    this.setState({ previousTime: Date.now() })
  }
}

handleReset = () => {
  this.setState({
    elapsedTime: 0


  })
}


  render() {

const seconds = Math.floor(this.state.elapsedTime / 1000);


    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className='stopwatch-time'>{seconds}</span>
        <button onClick={this.handleStopwatch}>{ this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )

  }

}

export default Stopwatch
