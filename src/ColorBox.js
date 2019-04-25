import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const newOpac = this.props.opacity - 0.1;
    return (
      <div className="color-box" style={{opacity: 2}}>
        {/* your conditional code here! */}
        {(this.props.opacity >= 0.2) ? <ColorBox opacity={1} />}
      </div>
    )
  }
  
}
