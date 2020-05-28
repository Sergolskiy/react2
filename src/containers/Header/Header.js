import React, {Component} from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom'
import logo from '../../assets/image/logo.png';

import axios from 'axios'

class Header extends Component {

  componentDidMount() {
    axios.get('https://brunch-7808f.firebaseio.com/phone.json').then(response => {
      console.log(response);
    })
  }

  render() {

    return (
      <header className={'header'}>
        <div className="content-wrap">
          <div className="header__inner">
            <div className="header__logo">
              <img src={logo} alt="img" />
            </div>
            <div className="header-fixed-link">
              <a href="#">
                <svg viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#mail" x="0" y="0"/>
                </svg>
              </a>
              <a href="#">
                <svg viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#tw" x="0" y="0"/>
                </svg>
              </a>
              <a href="#">
                <svg viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#fb" x="0" y="0"/>
                </svg>
              </a>
            </div>
            <div className="header__menu">
              <div className="header__phone mobile">
                <div className="header__phone-change">
                  <span>Ваш город:</span>
                  <select name="phone" id="change">
                    <option value="">Белгород</option>
                    <option value="">Белгород</option>
                  </select>
                </div>
                <a href="tel:+70000000000">+7 000 000 00 00</a>
                <div className="work-time">
                  <div>
                    Вт-Чт 8.00-20.00
                  </div>
                  <div>
                    Пт-Сб 9.00-22.00
                  </div>
                </div>
              </div>
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <NavLink to="/" className="header__menu-link header__menu-link--active">
                    Главная
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="/catalog" className="header__menu-link ">
                    Каталог
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="/about" className="header__menu-link ">
                    О компании
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="delivery" className="header__menu-link ">
                    Доставка
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="/payment" className="header__menu-link ">
                    Оплата
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="/stock" className="header__menu-link ">
                    Акции
                  </NavLink>
                </li>
                <li className="header__menu-item">
                  <NavLink to="contact" className="header__menu-link ">
                    Контакты
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="header__right">
              <div className="header__phone">
                <a href="tel:+70000000000">+7 000 000 00 00</a>
                <div className="header__phone-change">
                  <span>Ваш город:</span>
                  <select name="phone" id="change">
                    <option value="">Белгород</option>
                    <option value="">Белгород</option>
                  </select>
                </div>
              </div>

              <div className="header__cart">
                <svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#cart" x="0" y="0"/>
                </svg>
                <span className="header__cart-count">7</span>
              </div>
            </div>

            <span className="header__mobile-menu-btn toggle-mnu hidden-lg"><span></span></span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
