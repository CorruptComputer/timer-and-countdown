import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timerHours: 0,
      timerMinutes: 0,
      timerSeconds: 0,
      timerRunning: false,
      timerID: 0
    };
  }

  getTimer = () => {
    let hours =
      (this.state.timerHours < 10 ? "0" : "") +
      this.state.timerHours.toString();
    let minutes =
      (this.state.timerMinutes < 10 ? "0" : "") +
      this.state.timerMinutes.toString();
    let seconds =
      (this.state.timerSeconds < 10 ? "0" : "") +
      this.state.timerSeconds.toString();

    return hours + ":" + minutes + ":" + seconds;
  };

  startTimer = () => {
    if (this.state.timerRunning) {
      return;
    }

    let id = setInterval(() => {
      let newSeconds = this.state.timerSeconds,
        newMinutes = this.state.timerMinutes,
        newHours = this.state.timerHours;

      if (newSeconds === 59) {
        if (newMinutes === 59) {
          newHours += 1;
          newMinutes = 0;
          newSeconds = 0;
        } else {
          newMinutes += 1;
          newSeconds = 0;
        }
      } else {
        newSeconds += 1;
      }

      this.setState({
        timerHours: newHours,
        timerMinutes: newMinutes,
        timerSeconds: newSeconds
      });
    }, 1000);

    this.setState({
      timerID: id,
      timerRunning: true
    });
  };

  stopTimer = () => {
    clearInterval(this.state.timerID);
    this.setState({
      timerRunning: false,
      timerID: 0
    });
  };

  resetTimer = () => {
    clearInterval(this.state.timerID);
    this.setState({
      timerHours: 0,
      timerMinutes: 0,
      timerSeconds: 0,
      timerRunning: false,
      timerID: 0
    });
  };

  render() {
    return (
      <div>
        <h3>Timer</h3>
        <p>{this.getTimer()}</p>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Pause</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
