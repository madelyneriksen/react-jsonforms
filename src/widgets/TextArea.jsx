import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => {
  const {
    name,
    attrs,
    className,
    onChange,
  } = props;
  return (
    <textarea
      id={name}
      name={name}
      onChange={onChange}
      className={className}
      {...attrs}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  /* eslint-disable-next-line */
  attrs: PropTypes.object,
};

TextArea.defaultProps = {
  className: 'form__input',
  onChange: null,
  attrs: {},
};

export default TextArea;
