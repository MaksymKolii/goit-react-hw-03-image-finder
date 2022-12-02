// import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ smallImg }) => {
  return (
    <li className="gallery-item">
      <img src={smallImg} alt=" " />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
};
