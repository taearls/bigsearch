import React, { Component } from 'react';
import styles from '../App.scss';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';


export default class MovieContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}