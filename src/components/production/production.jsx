import React, { Component, Fragment } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import cardsImage from "../../assets/images/cards.png";
import cardsImage_2 from "../../assets/images/home-background.jpg"
import cardsImage_3 from "../../assets/images/product-2.jpg"



import 'react-tabs/style/react-tabs.css';
import "./production.scss";
import Button from '../../shares/button/button';

export class Production extends Component {
  render() {
    return (
      <Fragment>
        <section id='production'>
          <div className="container production__container">
            <h1 className='production__title'>Наша <span>продукция</span></h1>
            <Tabs>
              <TabList>
                <Tab>Ламинатные тубы</Tab>
                <Tab>Экструзионные тубы</Tab>
                <Tab>Другая упаковка</Tab>
              </TabList>

              <TabPanel>
                <img className='tabs__image' src={cardsImage} alt="card" />
              </TabPanel>
              <TabPanel>
                <img className='tabs__image' src={cardsImage_2} alt="card" />
              </TabPanel>
              <TabPanel>
                <img className='tabs__image' src={cardsImage_3} alt="card" />
              </TabPanel>
          </Tabs>
          <Button>Перейти в каталог</Button>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Production