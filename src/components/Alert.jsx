import React, { Component } from 'react';

class Alert extends Component {
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