import React, { Component } from 'react';

// import s from './Searchbar.module.css';

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
      return alert('Put something in input');
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
    // const { query } = this.state;
    return (
      <header className="888">
        <form className="888" onSubmit={this.handleSubmit}>
          <button type="submit" className="55">
            {/* <BsSearch style={{ marginRight: 8 }} /> */}
            <span className="uuu">Search</span>
          </button>

          <input
            className="888"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.query}
            name="query"
          />
        </form>
      </header>
    );
  }
}
