// import Modal from '../Modal/Modal';
import { ImageGalItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ smallImg }) => {
  return (
    <ImageGalItem>
      <ImageGalleryItemImage src={smallImg} alt=" " />
    </ImageGalItem>
  );
};
ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
};
