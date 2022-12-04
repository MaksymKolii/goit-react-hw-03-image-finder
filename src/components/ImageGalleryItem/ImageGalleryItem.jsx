// import Modal from '../Modal/Modal';
// import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ smallImg }) => {
  return (
    <li className="999">
      <img className="00" src={smallImg} alt=" " />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
};
