import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="credits">
                    <h6>Desenvolvido por Alan Albuquerque F. Lopes</h6>
                </div>
                <div className="network">
                    <a className="github-anchor" href="https://github.com/offpepe" target="_blank" rel="noreferrer" >
                      <i class="fab fa-github"></i>
                    </a>
                    <a className="linkedin-anchor" href="https://www.linkedin.com/in/alan-albuquerque-f-lopes-aa404b206/" target="_blank" rel="noreferrer" >
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a className="website-anchor" href="https://offpepe.github.io/portfolio/" target="_blank" rel="noreferrer" >
                        <i class="fas fa-link"></i>
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;