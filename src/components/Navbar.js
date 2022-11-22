import React from 'react';
import './Header.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid navbar-top-margin">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" aria-current="page" href="#menu">Menu</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" aria-current="page" href="#blog">Blog</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" aria-current="page" href="#branches">Branches</a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" aria-current="page" href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className='d-flex ms-auto margin-end-logo'>
          <img src={require('./images/Logo.png')} height={40} px alt="" />
          <div className='prozaLibre ms-2 text-white fs-3'>CoffeeCup</div>

        </div>
      </div>
    </nav>
  )


}
export default Navbar;