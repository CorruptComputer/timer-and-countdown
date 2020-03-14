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

  reset1h = () => {
    clearInterval(this.state.countdownID);
    this.setState({
      countdownHours: 1,
      countdownMinutes: 0,
      countdownSeconds: 0,
      countdownRunning: false,
      countdownID: 0
    });
  };

  reset2h = () => {
    clearInterval(this.state.countdownID);
    this.setState({
      countdownHours: 2,
      countdownMinutes: 0,
      countdownSeconds: 0,
      countdownRunning: false,
      countdownID: 0
    });
  };

  reset30m = () => {
    clearInterval(this.state.countdownID);
    this.setState({
      countdownHours: 0,
      countdownMinutes: 30,
      countdownSeconds: 0,
      countdownRunning: false,
      countdownID: 0
    });
  };

  reset15m = () => {
    clearInterval(this.state.countdownID);
    this.setState({
      countdownHours: 0,
      countdownMinutes: 15,
      countdownSeconds: 0,
      countdownRunning: false,
      countdownID: 0
    });
  };

  reset5m = () => {
    clearInterval(this.state.countdownID);
    this.setState({
      countdownHours: 0,
      countdownMinutes: 5,
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
        <button onClick={this.stopCountdown}>Pause</button>
        <div>
          <button onClick={this.reset2h}>Reset 2h</button>
          <button onClick={this.reset1h}>Reset 1h</button>
          <button onClick={this.reset30m}>Reset 30m</button>
          <button onClick={this.reset15m}>Reset 15m</button>
          <button onClick={this.reset5m}>Reset 5m</button>
        </div>
      </div>
    );
  }
}

export default Countdown;
