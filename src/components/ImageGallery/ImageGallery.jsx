import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import s from './ImageGallery.module.css';

export class ImagesGallery extends Component {
  render() {
    return this.props.options.map(({ id, smallImg }) => {
      return (
        <ul key={id} className="00">
          <ImageGalleryItem smallImg={smallImg} />
        </ul>
      );
    });
  }
}
ImagesGallery.propTypes = {
  id: PropTypes.number,
  smallImg: PropTypes.string,
};
