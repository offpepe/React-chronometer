/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Proptypes from 'prop-types';

export default function PredefinedTimes(props) {
  const { times, handle } = props;
  return (
    <section className="predefined-times">
      <button onClick={handle} time="3" type="button" className="button is-small is-success">{ times[0] }</button>
      <button onClick={handle} time="5" type="button" className="button is-small is-info">{ times[1] }</button>
      <button onClick={handle} time="1" type="button" className="button is-small is-warning">{ times[2] }</button>
    </section>
  );
}

PredefinedTimes.propTypes = {
  times: Proptypes.arrayOf(Proptypes.string).isRequired,
  handle: Proptypes.func.isRequired,
};
