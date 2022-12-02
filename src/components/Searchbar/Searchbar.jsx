import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

// import { Formik } from 'formik';
// import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addUser({ ...this.state });
    console.log(this.state);
    this.reset();
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
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
