import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <BsSearch style={{ marginRight: 8 }} />
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
