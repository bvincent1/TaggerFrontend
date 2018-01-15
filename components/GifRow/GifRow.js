import React, { Component } from 'react';

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
      <div className="row">
        {imgList}
        <style jsx>{`
          .gifEntry {
            position:relative;
            padding-bottom:54%;
          }

          .gifEntry img {
            width: 300px;
            height: 300px;
          }
        `}</style>
      </div>
    )
  }
}

export default GifRow;
