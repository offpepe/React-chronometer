import React, { Component } from 'react';

class Alert extends Component {
    constructor() {
        super();
        this.state = {
            alarmSound: new Audio(process.env.PUBLIC_URL + '/mixkit-interface-option-select-2573.wav'),
            playing: true,
        }
    }

    componentDidMount() {
        const { alarmSound } = this.state;
        alarmSound.play();
    }

    render() {
        const { handler } = this.props;
        return (
            <div className="alert">
                <h1 className="title">Fim do intervalo!</h1>
                <button type='button' onClick={ handler } className="button is-success">OK</button>
            </div>
        );
    }
}

export default Alert;