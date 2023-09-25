import React, { Component } from 'react'
import SiteLogo from "../../assets/images/site-logotip.png";
import MenuIcon from "../../assets/icons/hamburger_icon.png";
import DarkIcon from "../../assets/icons/dark-icon.png";
import LightIcon from "../../assets/icons/light-icon.png"
import "./header.scss";

export class Header extends Component {
  state= {
    dark: true
  }
  render() {

    const darkLightFunction = () =>{
      document.body.classList.toggle("dark-light-mode")
      this.setState({dark: !this.state.dark})
    
    }

    return (
      <header>
        <div className="container header__container">

          <div className='header__logo-box'>
            <a className='header__logo-link' href="#home">
              <img className='header__logo-img' src={SiteLogo} alt="logotip site" />
            </a>
          </div>
          
          <nav>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a href="#poduction" className="nav__link">Продукция</a>
              </li>
              <li className='nav__item'>
                <a href="#sertifikat" className="nav__link">Сертификаты</a>
              </li>
              <li className='nav__item'>
                <a href="#mygroup" className="nav__link">Наша команда</a>
              </li>
              <li className='nav__item'>
                <a href="#about" className="nav__link">О нас</a>
              </li>
              <li className='nav__item'>
                <a href="#news" className="nav__link">Новости</a>
              </li>
              <li className='nav__item'>
                <a href="#vacancy" className="nav__link">Вакансии</a>
              </li>
              <li className='nav__item'>
                <a href="#contack" className="nav__link">Контакты</a>
              </li>
            </ul>
          </nav>
          
          <div className='btns-box'>
            <div className='header__toggle-box'>
            <button className='header__toggle-btn'>
              <img src={MenuIcon} alt="icon menu" />
            </button>
          </div>
          
          <div className='dark-light__icon-box'>
            <button onClick={darkLightFunction} className='light-dark__icon-btn'>
              <img src={this.state.dark ? DarkIcon : LightIcon} alt="icon dark" />
            </button>
          </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header