import { LButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <LButton onClick={onClick} type="button">
      Load more
    </LButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
