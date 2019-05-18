import React from 'react';
import PropTypes from 'prop-types';

const TextAreaWidget = (props) => {
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

TextAreaWidget.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  /* eslint-disable-next-line */
  attrs: PropTypes.object,
};

TextAreaWidget.defaultProps = {
  className: 'form__input',
  onChange: null,
  attrs: {},
};

export default TextAreaWidget;
