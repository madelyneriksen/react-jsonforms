import React from 'react';
import PropTypes from 'prop-types';


const Title = (props) => {
  const {
    text,
    ...rest
  } = props;
  // Becuase we're in a seperate file we'll ignore this.
  /* eslint-disable-next-line */
  return <label {...rest}>{text}</label>;
};

Title.defaultProps = {
  className: 'form__label',
  attrs: {},
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  className: PropTypes.string,
  /* eslint-disable-next-line */
  attrs: PropTypes.object,
};

export default Title;
