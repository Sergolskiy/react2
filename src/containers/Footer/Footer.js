import React, {Component} from 'react'

import logo from '../../assets/image/footer-logo.png'

class Footer extends Component {

  render() {

    return (
      <footer className={'footer'}>
        <div className="content-wrap">
          <div className="footer__inner">
            <div className="footer__top">
              <div className="footer__center">
                <a href="tel:+700000000" className="footer__txt">
                  +7 000 000 00
                </a>
                <a href="mailto:brunchberry@gmail.com" className="footer__txt">
                  brunchberry@gmail.com
                </a>
              </div>

              <div className="footer__center">
                <img src={logo} alt="img" className="footer__logo" />
                  <div className="footer__social">
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
              </div>

              <div className="footer__center">
                <div className="footer__txt">
                  Вт-Чт 8.00-20.00
                </div>
                <div className="footer__txt">
                  Пт-Сб 9.00-22.00
                </div>
              </div>
            </div>
            <div className="footer__bottom">
              <ul className="footer__menu">
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link footer__menu-link--active">
                    Главная
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Каталог
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    О компании
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Доставка
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Оплата
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Акции
                  </a>
                </li>
                <li className="footer__menu-item">
                  <a href="#" className="footer__menu-link">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__copyright">
              BrunchBerry 2020© Все права защищены
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
