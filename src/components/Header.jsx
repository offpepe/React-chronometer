import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="cronometer-header">
                <a href="/portfolio/projects" className="button is-rounded is-link is-dark" target="_blank"> Portfolio </a>
            </header>
        );
    }
}

export default Header;