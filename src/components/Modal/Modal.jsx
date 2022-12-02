import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
// import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('keydown', e => {
      console.log(e);
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    // const { src } = this.props;
    return createPortal(
      <div className={s.overlay}>
        <div className={s.modal}>
          {this.props.children}
          {/* <img src={src} alt="" /> */}
        </div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;
