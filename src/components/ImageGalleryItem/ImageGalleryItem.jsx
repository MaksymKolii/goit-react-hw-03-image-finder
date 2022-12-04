// import Modal from '../Modal/Modal';
import { ImageGalItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ smallImg, bigImg, onClick }) => {
  return (
    <ImageGalItem>
      <ImageGalleryItemImage
        src={smallImg}
        alt=" "
        onClick={() => onClick(bigImg)}
      />
    </ImageGalItem>
  );
};
// ImageGalleryItem.propTypes = {
//   smallImg: PropTypes.string.isRequired,
// };
ImageGalleryItem.propTypes = {
  items: PropTypes.exact({
    id: PropTypes.string,
    smallImg: PropTypes.string,
    bigImg: PropTypes.string,
  }),
  onClick: PropTypes.func.isRequired,
};
