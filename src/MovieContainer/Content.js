import React, { Component } from 'react';
import styles from '../App.scss';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        { this.props.children }
      </div>
    )
  }
}
