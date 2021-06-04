import React, { Component } from 'react';

class PredefinedTimes extends Component {
    render() {
        const { times, handle } = this.props
        return (
            <section className="predefined-times">
                <button onClick={ handle } time="3" type="button" className="button is-small is-success">{ times[0] }</button>
                <button onClick={ handle } time="5" type="button" className="button is-small is-info">{ times[1] }</button>
                <button onClick={ handle } time="1" type="button" className="button is-small is-warning">{ times[2] }</button>
            </section>
        );
    }
}

export default PredefinedTimes;