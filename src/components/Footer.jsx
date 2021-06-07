import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="credits">
        <h6>Desenvolvido por Alan Albuquerque F. Lopes</h6>
      </div>
      <div className="network">
        <a className="github-anchor" href="https://github.com/offpepe" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
        <a className="linkedin-anchor" href="https://www.linkedin.com/in/alan-albuquerque-f-lopes-aa404b206/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin" />
        </a>
        <a className="website-anchor" href="https://offpepe.github.io/portfolio/" target="_blank" rel="noreferrer">
          <i className="fas fa-link" />
        </a>
      </div>
    </footer>
  );
}
