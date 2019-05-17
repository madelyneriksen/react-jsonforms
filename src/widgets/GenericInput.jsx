import React from 'react';
import PropTypes from 'prop-types';


const GenericInput = (props) => {
  const {
    type,
    name,
    onChange,
    className,
    attrs,
  } = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      className={className}
      {...attrs}
    />
  );
};

GenericInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  // We don't really know for sure what someone may want in their html.
  /* eslint-disable-next-line */
  attrs: PropTypes.object,
};

GenericInput.defaultProps = {
  type: 'text',
  className: 'form__input',
  attrs: {},
  onChange: null,
};

export default GenericInput;
