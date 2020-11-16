import { data } from '@tensorflow/tfjs';
import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import { Redirect } from "react-router-dom";
import './Home.css';


/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
 

  state = {
    result : 'No result',
    redirect: null
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        redirect: "/classify"
      })
      
    }
  }

  handleError = err => {
    console.error(err)
  }
    
  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname : this.state.redirect,
        state: { id: this.state.result}
      }} />
    }
    return (
      <div className="Home container">
        <h1>Home</h1>
        <p>
          Hi, this is a bottle detector application
        </p>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}