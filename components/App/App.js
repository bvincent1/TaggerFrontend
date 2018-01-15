import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from '../SearchBar/SearchBar';
import GifRow from '../GifRow/GifRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.apiFetch = this.apiFetch.bind(this);

    // https://euchaghki0.execute-api.us-east-1.amazonaws.com/dev/v1/tags

    this.state = {
      gifs: [],
      isLoading: true,
      value: '#rock',
      tagCursorArray: []
    };
  }

  apiFetch(callback) {
    const uri = 'https://euchaghki0.execute-api.us-east-1.amazonaws.com/dev/v1/tags';
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'tagCursorArray':
          this.state.value.split('#')
            .map(t => {return t.trim()})
            .filter(t => {return t})
            .map(t => {return {tag: t}})
      })
    }).then(streamResp => {
      return streamResp.json();
    }).then(data => {
      console.log(data);
      callback(data);
    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.apiFetch( data => {
      if (data) {
        this.setState({
          isLoading: false,
          gifs: data.gfycatArray
        });
      }
    });
  }

  onSearchHandler(e) {
    this.setState({
      value: e.target.value,
      isLoading: this.state.isLoading,
      gifs: this.state.gifs
    })
  }

  onClickHandler(e) {
    console.log(e);
    this.apiFetch( data => {
      if (data) {
        this.setState({
          isLoading: false,
          value: this.state.value,
          gifs: data.gfycatArray,
          tagCursorArray: data.tagCursorArray
        });
      }
    });
  }

  render() {
    const gifRows = _.chunk(this.state.gifs, 3).map(row => {return <GifRow gifArray={row}/>});
    return (
      <div className="App container">
        <header className="App-header">
          <SearchBar
            value={this.state.value}
            onSearch={this.onSearchHandler}
            onClick={this.onClickHandler}/>
        </header>
        <body>
          {gifRows}
        </body>
        <style jsx>{`
          .App {
            text-align: center;
          }

          .App-header {
            background-color: #222;
            height: 150px;
            padding: 20px;
          }

          .App-title {
            font-size: 1.5em;
          }

          .App-intro {
            font-size: large;
          }

          @keyframes App-logo-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .gifEntry {
            position:relative;
            padding-bottom:54%;
          }

          .gifEntry img {
            width: 300px;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
