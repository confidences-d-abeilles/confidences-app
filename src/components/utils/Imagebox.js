import React, { Component } from 'react'
import { handleChange, handleTick } from '../../services/FormService'
import { Link } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import request from '../../services/Net'
import ReactQuill from 'react-quill';
import Lightbox from 'lightbox-react'
import ReactGA from 'react-ga';
import Confirm from './Confirm';
const config = require('../../config.js');

export default class Imagebox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render () {
    return(
      <div>
        <img  onClick={() => this.setState({ isOpen: true })} width={this.props.width} height={this.props.height} src={this.props.src} atl={this.props.alt}/>
        {this.state.isOpen && <Lightbox mainSrc={this.props.src} onCloseRequest={() => this.setState({ isOpen: false })}/>}
      </div>
    );
  }
}
