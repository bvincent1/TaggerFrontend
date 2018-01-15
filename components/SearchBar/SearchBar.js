import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(e) {
    this.props.onSearch(e);
  }

  handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    return (
      <div>
        <input value={this.props.value} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>
        <style jsx>{`
          input {
            color: black;
          }
        `}</style>
      </div>
    );
  }
}

export default SearchBar;
