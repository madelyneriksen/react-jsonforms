import React from 'react';
import PropTypes from 'prop-types';


const SelectWidget = (props) => {
  const {
    name,
    onChange,
    className,
    attrs,
    value,
    options,
  } = props;
  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      {...attrs}
    >
      {options.map(option => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

SelectWidget.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /* eslint-disable-next-line */
  attrs: PropTypes.object,
};

SelectWidget.defaultProps = {
  value: null,
  onChange: null,
  className: 'form__input',
  attrs: {},
};

export default SelectWidget;
