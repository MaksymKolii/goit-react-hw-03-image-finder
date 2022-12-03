import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export class ImagesGallery extends Component {
  render() {
    return this.props.options.map(({ id, smallImg, bigImg }) => {
      return (
        <ul key={id} className={s.ImageGallery}>
          <ImageGalleryItem
            smallImg={smallImg}
            // bigImg={bigImg}
            // openModal={this.props.openModal}
          />
        </ul>
      );
    });
  }
}
ImagesGallery.propTypes = {
  id: PropTypes.number,
  smallImg: PropTypes.string,
};
