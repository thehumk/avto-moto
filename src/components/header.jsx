import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
  return (
    <header className="header app__header">
      <div className="header__wrapper">
        <img src={logo} alt="Avto-Moto"/>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Автомобили</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Контакты</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Услуги</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Вакансии</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
