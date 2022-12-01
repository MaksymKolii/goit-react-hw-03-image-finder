import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImagesGallery extends Component {
  render() {
    return this.props.options.map(({ id, smallImg }) => {
      return (
        <ul key={id} className="gallery">
          <ImageGalleryItem smallImg={smallImg}></ImageGalleryItem>
        </ul>
      );
    });
  }
}
ImagesGallery.propTypes = {
  id: PropTypes.number,
  smallImg: PropTypes.string,
};
