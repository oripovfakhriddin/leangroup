import React, { Component, Fragment } from 'react'

import "./about.scss"

export class About extends Component {
  render() {
    return (
      <Fragment>
        <section id='about'>
          <div className="container about__container">
            <h1 className='about__title'> О компании <span>LEANGROUP</span> </h1>
            <div className="about__content-box">
              <div className="about__video-box">
                <iframe  src="https://www.youtube.com/embed/EMDhqk8VHlE?si=9LxxClt2CXDmanZD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className="about__text__content-box">
                <p>
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
                </p>
                <p>
                  Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
                </p>
                <p>
                  С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. 
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default About