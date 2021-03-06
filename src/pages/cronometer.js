/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Alert from '../components/Alert';
import PredefinedTimes from '../components/PredefinedTimes';

class Cronometer extends Component {
  constructor() {
    super();
    this.state = {
      dez: 0,
      un: 0,
      dec: 0,
      cent: 0,
      wasStarted: false,
      handles: {
        handleDez: (e) => {
          let { dez } = this.state;
          if (e.target.value.length === 1) {
            dez = Number(e.target.value);
            this.setState({ dez });
          }
        },
        handleUn: (e) => {
          let { un } = this.state;
          if (e.target.value.length === 1) {
            un = Number(e.target.value);
            this.setState({ un });
          }
        },
        handleDec: (e) => {
          let { dec } = this.state;
          if (e.target.value.length === 1 && Number(e.target.value) < 7) {
            dec = Number(e.target.value);
            this.setState({ dec });
          }
        },
        handleCent: (e) => {
          let { cent } = this.state;
          if (e.target.value.length === 1) {
            cent = Number(e.target.value);
            this.setState({ cent });
          }
        },
      },
    };
    this.clockEngine = this.clockEngine.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.setPredefinedTime = this.setPredefinedTime.bind(this);
    this.alertFinished = this.alertFinished.bind(this);
    this.setStateBlank = this.setStateBlank.bind(this);
  }

  setPredefinedTime(e) {
    let { dez, un } = this.state;
    const time = Number(Object.entries(e.target).pop().pop().time);
    if (time === 1) {
      dez = time;
      un = 0;
    } else {
      un = time;
      dez = 0;
    }
    this.setState({ dez, un });
  }

  setStateBlank() {
    const { wasStarted } = this.state;
    if (wasStarted === false) {
      this.setState({
        un: '', dez: '', dec: '', cent: '',
      });
    }
  }

  clockEngine() {
    let {
      dez, un, dec, cent,
    } = this.state;
    const time = [dez, un, dec, cent];
    if (time.some((ind) => ind !== 0)) {
      const intervalo = setInterval(() => {
        if (un === 0 && dez > 0) {
          dez -= 1;
          un = 10;
        }
        if (dec === 0 && un > 0) {
          un -= 1;
          dec = 6;
        }
        if (cent === 0 && dec > 0) {
          dec -= 1;
          cent = 10;
        }
        if (cent > 0) {
          cent -= 1;
        }
        if ([dez, un, dec, cent].every((ind) => ind === 0)) {
          clearInterval(intervalo);
        }
        this.setState({
          dez, un, dec, cent,
        });
      }, 1000);
      this.setState({ intervalo, wasStarted: true });
    }
  }

  pauseTimer() {
    const { intervalo } = this.state;
    clearInterval(intervalo);
  }

  stopTimer() {
    const { intervalo } = this.state;
    clearInterval(intervalo);
    this.setState({
      wasStarted: false, dez: 0, un: 0, dec: 0, cent: 0,
    });
  }

  alertFinished() {
    const {
      dez, un, dec, cent,
    } = this.state;
    const time = [dez, un, dec, cent];
    if (time.every((ind) => ind === 0)) {
      this.setState({ wasStarted: false, alert: true });
    }
  }

  render() {
    const {
      dez, un, dec, cent, wasStarted, alert, handles,
    } = this.state;
    if (wasStarted) {
      this.alertFinished();
    }
    return (
      <main className="cronometer-page">
        {alert ? <Alert handler={() => this.setState({ alert: false })} /> : (
          <>
            <h2 className="title is-centered"> Vamos de intervalo? </h2>
            <div className="cronometer">
              <form>
                <div className="time-controller">
                  <PredefinedTimes times={['3:00', '5:00', '10:00']} handle={this.setPredefinedTime} />
                  <input
                    max="9"
                    min="0"
                    disabled={wasStarted}
                    onClick={this.setStateBlank}
                    onChange={handles.handleDez}
                    type="number"
                    maxLength="1"
                    placeholder={0}
                    value={dez}
                  />
                  <input
                    max="9"
                    min="0"
                    disabled={wasStarted}
                    onChange={handles.handleUn}
                    type="number"
                    maxLength="1"
                    placeholder={0}
                    value={un}
                  />
                  <h2 className="double-dots">:</h2>
                  <input
                    max="9"
                    min="0"
                    disabled={wasStarted}
                    onChange={handles.handleDec}
                    type="number"
                    maxLength="1"
                    placeholder={0}
                    value={dec}
                  />
                  <input
                    max="9"
                    min="0"
                    disabled={wasStarted}
                    onChange={handles.handleCent}
                    type="number"
                    maxLength="1"
                    placeholder={0}
                    value={cent}
                  />
                </div>
                <div className="time-starter">
                  <button type="button" className="button is-primary is-centered" onClick={this.clockEngine}> Start Countdown </button>
                  <button type="button" className="button is-link" onClick={this.pauseTimer}>Pause</button>
                  <button type="button" className="button is-danger" onClick={this.stopTimer}>Stop</button>
                </div>
              </form>
            </div>
          </>
        )}
      </main>
    );
  }
}

export default Cronometer;
