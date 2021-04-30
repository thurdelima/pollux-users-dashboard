import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';


function Navbar() {

    return (
       
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">
            Users
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(atual)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link-Teste
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link-Teste
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Desativado
                </a>
              </li>
            </ul>
            {/* <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Pesquisa" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                </form> */}
            <div className="form-inline mt-2 mt-md-0">
              <Link to="/" className="nav-link ajust">
                Sair
              </Link>
            </div>
          </div>
        </nav>
     
     
     
    );

} 


export default Navbar;