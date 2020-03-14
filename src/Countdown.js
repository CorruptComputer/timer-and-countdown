import React, { Component } from "react";

class Countdown extends Component {
  constructor() {
    super();
    this.state = {
      countdownHours: 1,
      countdownMinutes: 0,
      countdownSeconds: 0,
      countdownRunning: false,
      countdownID: 0
    };
  }

  getCountdown = () => {
    let hours =
      (this.state.countdownHours < 10 ? "0" : "") +
      this.state.countdownHours.toString();
    let minutes =
      (this.state.countdownMinutes < 10 ? "0" : "") +
      this.state.countdownMinutes.toString();
    let seconds =
      (this.state.countdownSeconds < 10 ? "0" : "") +
      this.state.countdownSeconds.toString();

    return hours + ":" + minutes + ":" + seconds;
  };

  startCountdown = () => {
    if (this.state.countdownRunning) {
      return;
    }

    let id = setInterval(() => {
      let newSeconds = this.state.countdownSeconds,
        newMinutes = this.state.countdownMinutes,
        newHours = this.state.countdownHours;

      if (newSeconds === 0) {
        if (newMinutes === 0) {
          if (newHours === 0) {
            clearInterval(this.state.countdownID);
            alert("Countdown finished!");
          } else {
            newHours -= 1;
            newMinutes = 59;
            newSeconds = 59;
          }
        } else {
          newMinutes -= 1;
          newSeconds = 59;
        }
      } else {
        newSeconds -= 1;
      }

      this.setState({
        countdownHours: newHours,
        countdownMinutes: newMinutes,
        countdownSeconds: newSeconds
      });
    }, 1000);

    this.setState({
      countdownID: id,
      countdownRunning: true
    });
  };

  stopCountdown = () => {
    clearInterval(this.state.countdownID);
    this.setState({
      countdownRunning: false,
      countdownID: 0
    });
  };

  resetCountdown = () => {
    clearInterval(this.state.countdownID);
    this.setState({
      countdownHours: 1,
      countdownMinutes: 0,
      countdownSeconds: 0,
      countdownRunning: false,
      countdownID: 0
    });
  };

  render() {
    return (
      <div>
        <h3>Countdown</h3>
        <p>{this.getCountdown()}</p>
        <button onClick={this.startCountdown}>Start</button>
        <button onClick={this.stopCountdown}>Stop</button>
        <button onClick={this.resetCountdown}>Reset</button>
      </div>
    );
  }
}

export default Countdown;
