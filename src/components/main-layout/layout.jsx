import React, { Component, Fragment } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

export class Layout extends Component {
  render() {
    const {children} = this.props;
    return (
      <Fragment>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </Fragment>
    )
  }
}

export default Layout