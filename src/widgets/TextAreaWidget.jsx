import React from 'react';
import PropTypes from 'prop-types';

const TextAreaWidget = (props) => {
  const {
    name,
    attrs,
    value,
    className,
    onChange,
  } = props;
  return (
    <textarea
      id={name}
      name={name}
      value={value}
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
  value: PropTypes.string,
  /* eslint-disable-next-line */
  attrs: PropTypes.object,
};

TextAreaWidget.defaultProps = {
  className: 'form__input',
  onChange: null,
  value: null,
  attrs: {},
};

export default TextAreaWidget;
