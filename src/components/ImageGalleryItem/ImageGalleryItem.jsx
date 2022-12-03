// import Modal from '../Modal/Modal';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ smallImg }) => {
  return (
    <li className={s.Item}>
      <img className={s.Image} src={smallImg} alt=" " />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
};
