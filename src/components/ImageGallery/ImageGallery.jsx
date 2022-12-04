import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImagesGallery extends Component {
  render() {
    return this.props.options.map(({ id, smallImg }) => {
      return (
        <Gallery key={id}>
          <ImageGalleryItem smallImg={smallImg} />
        </Gallery>
      );
    });
  }
}
ImagesGallery.propTypes = {
  id: PropTypes.number,
  smallImg: PropTypes.string,
};
