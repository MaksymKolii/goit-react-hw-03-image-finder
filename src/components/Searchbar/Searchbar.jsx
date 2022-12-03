import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import s from './Searchbar.module.css';

// import { Formik } from 'formik';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      query: value.toLowerCase(),
    });
  };

  reset = () => {
    this.setState({ query: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      return alert('Not possible to find');
    }

    this.props.onSubmit(this.state.query);
    this.reset();
  };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.props.onSubmit({ ...this.state });
  //   console.log(this.state);
  //   this.reset();
  // };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <BsSearch style={{ marginRight: 8 }} />
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.query}
            // name="query"
          />
        </form>
      </header>
    );
  }
}
