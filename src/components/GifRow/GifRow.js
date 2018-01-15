import React, { Component } from 'react';
import './GifRow.css';

class GifRow extends Component {
  render() {
    const imgList = this.props.gifArray.map(gifObj => {
      return (
        <div className="col-md-4 gifEntry" key={gifObj.gifUrl}>
          <img src={gifObj.gifUrl} alt=""/>
        </div>
      );
    });

    return (
      <div className="row">{imgList}</div>
    )
  }
}

export default GifRow;
