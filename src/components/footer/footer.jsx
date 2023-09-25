import React, { Component, Fragment } from 'react'

import SiteLogo from "../../assets/images/site-logotip.png";
import LogoVK from "../../assets/icons/vk.svg";
import LogoFB from "../../assets/icons/fb.svg";
import LogoLK from "../../assets/icons/linkedin.svg";


import "./footer.scss";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer>
          <div className="container footer__container">
            <div className="footer__box-first">
              <div className="footer__img-box">
                <a href="#home">
                  <img src={ SiteLogo } alt="Site Logo" />
                </a>
              </div>
              <div className='footer__social-box'>
                <ul className="footer__social-list">
                  <li className='footer__social-item'>
                    <a href="#home">
                      <img src={LogoVK} alt="vKontakte" />
                    </a>
                  </li>
                  <li className='footer__social-item'>
                    <a href="#home">
                      <img src={LogoFB} alt="Facebook" />
                    </a>
                  </li>
                  <li className='footer__social-item'>
                    <a href="#home">
                      <img src={LogoLK} alt="Linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="footer__box-second">
                <ul className='footer__link-list'>
                  <div className='footer__link__list-box'>
                    <li className='footer__link-item'>
                      <h2 className='footer__link__item-title'>Продукция</h2>
                      <a className='footer__link__item-link' href="#production">Ламинатные тубы</a>
                      <a className='footer__link__item-link' href="#production">Экструзионные тубы</a>
                      <a className='footer__link__item-link' href="#production">Другая упаковка</a>
                    </li>
                    <li className='footer__link-item'>
                      <h2 className='footer__link__item-title'>Компания</h2>
                      <a className='footer__link__item-link' href="#home">О нас</a>
                      <a className='footer__link__item-link' href="#home">Наша команда</a>
                      <a className='footer__link__item-link' href="#sertifikat">Сертификаты</a>
                    </li>
                    <li className='footer__link-item'>
                      <h2 className='footer__link__item-title'>Разделы</h2>
                      <a className='footer__link__item-link' href="#footer">Контакты</a>
                      <a className='footer__link__item-link' href="#home">Новости</a>
                      <a className='footer__link__item-link' href="#home">Вакансии</a>
                    </li>
                  </div>
                  <div className='footer__link__list-box'>
                    <li className='footer__link-item footer__link-item__second'>
                      <ul className='footer__phone-list'>
                        <li className='footer__phone-item'>
                          <p>Беларусь</p>
                          <a href="tel: +998906949416">+375 (17) 270 53 77</a>
                          <a href="tel: +998906949416">+375 (17) 270 53 78</a>
                        </li>
                        <li className='footer__phone-item'>
                          <p>Москва</p>
                          <a href="tel: +998906949416">+7 (495) 280 73 44</a>
                          <a href="tel: +998906949416">+7 (495) 280 73 44</a>
                        </li>
                      </ul>                    
                    </li>
                    <li className='footer__link-item footer__link-item__second'>
                      <ul className='footer__phone-list'>
                        <li className='footer__phone-item'>
                          <p>Европа</p>
                          <a href="tel: +998906949416">+48 73 1111 044</a>
                        </li>
                        <li className='footer__phone-item'>
                          <p>Екатеринбург</p>
                          <a href="tel: +998906949416">+7 (343) 346 82 06</a>
                        </li>
                      </ul>
                    </li>
                  </div>
                
                </ul>
            </div>
              <p className='footer__text'>
                © 2022 Leangroup. All Rights Reserved.
              </p>
              <p className='footer__text'>
                Разработка и продвижение сайтов SkyWeb.by
              </p>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Footer