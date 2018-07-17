import React, { Component } from 'react';
import styles from '../App.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        { this.props.children }
      </div>
    )
  }
}
