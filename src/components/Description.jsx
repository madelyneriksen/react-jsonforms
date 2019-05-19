import React from 'react';
import PropTypes from 'prop-types';


const Description = (props) => {
  const {
    text,
    ...rest
  } = props;
  return (
    <p {...rest}>{text}</p>
  );
};

Description.defaultProps = {
  className: 'form__description',
  attrs: {},
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  /* eslint-disable-next-line */
  attrs: PropTypes.object,
};

export default Description;
