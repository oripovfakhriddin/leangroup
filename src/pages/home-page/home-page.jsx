import React, { Component } from 'react'

import "./home-page.scss"

export class HomePage extends Component {
  render() {
    return (
      <section id='home'>
        <div className="home__page-box">
          <div className="container home__container">
            <div className='home__page-content'>
              <h4>LEANGROUP - тубы и этикетки</h4>
              <h2>Ламинатные тубы</h2>
              <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
              <button>Каталог</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HomePage