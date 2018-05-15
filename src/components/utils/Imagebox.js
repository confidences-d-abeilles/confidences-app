import React, { Component } from 'react'
import Lightbox from 'lightbox-react'

export default class Imagebox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render () {
    return(

      <div onClick={() => this.setState({ isOpen: true })} className={this.props.className} style={{ width: this.props.width, cursor: 'pointer', height: this.props.height, paddingTop: this.props.paddingTop, backgroundImage: `url(${this.props.src})`, backgroundSize: 'cover' }}>
        {this.state.isOpen && <Lightbox mainSrc={this.props.src} onCloseRequest={() => this.setState({ isOpen: false })}/>}
      </div>
    );
  }
}
