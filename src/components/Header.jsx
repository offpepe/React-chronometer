/* eslint-disable no-param-reassign */
import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      darkmode: false,
    };

    this.darkmode = this.darkmode.bind(this);
  }

  darkmode() {
    const { darkmode } = this.state;
    if (!darkmode) {
      const { body } = document;
      const header = document.getElementsByClassName('cronometer-header');
      const footer = document.getElementsByClassName('footer');
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5');
      const inputs = document.querySelectorAll('input');
      const btn = document.getElementsByClassName('darkmode');
      // eslint-disable-next-line no-return-assign
      headings.forEach((heading) => heading.style.color = 'white');
      inputs.forEach((input) => {
        input.style.backgroundColor = '#585B56';
        input.style.color = 'white';
      });
      btn[0].style.filter = 'invert(100%)';
      header[0].style.backgroundColor = '#6a495b';
      footer[0].style.backgroundColor = '#6a495b';
      body.style.backgroundColor = '#3E2A35';
      this.setState({ darkmode: true });
    } else {
      const { body } = document;
      const header = document.getElementsByClassName('cronometer-header');
      const footer = document.getElementsByClassName('footer');
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5');
      const btn = document.getElementsByClassName('darkmode');
      const inputs = document.querySelectorAll('input');
      // eslint-disable-next-line no-return-assign
      headings.forEach((heading) => heading.style.color = 'black');
      inputs.forEach((input) => {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
      });
      btn[0].style.filter = 'invert(0%)';
      header[0].style.backgroundColor = '#3E2A35';
      footer[0].style.backgroundColor = '#3E2A35';
      body.style.backgroundColor = 'white';
      this.setState({ darkmode: false });
    }
  }
  /* eslint-enable */

  render() {
    return (
      <header className="cronometer-header">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className="darkmode" onClick={this.darkmode}><i className="fas fa-adjust" /></button>
      </header>
    );
  }
}

export default Header;
