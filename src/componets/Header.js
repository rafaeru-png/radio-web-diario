import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Rádio Web Diário Digital</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#radio">Ouça Agora</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contato</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#terms">Termos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
