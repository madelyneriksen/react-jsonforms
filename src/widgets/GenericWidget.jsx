import React from 'react';
import PropTypes from 'prop-types';

import Description from '../components/Description';
import Title from '../components/Title';


const GenericWidget = (props) => {
  const {
    type,
    name,
    value,
    title,
    input,
    onChange,
    description,
  } = props;
  return (
    <React.Fragment>
      <Title htmlFor={name} {...title} />
      {'text' in description
       && <Description {...description} />
      }
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={input.className}
        {...input.attrs}
      />
    </React.Fragment>
  );
};

GenericWidget.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  /* eslint-disable-next-line */
  value: PropTypes.any.isRequired,
  title: PropTypes.shape({
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    /* eslint-disable-next-line */
    attrs: PropTypes.object,
  }),
  description: PropTypes.shape({
    text: PropTypes.string,
    className: PropTypes.string,
    /* eslint-disable-next-line */
    attrs: PropTypes.object,
  }),
  input: PropTypes.shape({
    className: PropTypes.string,
    /* eslint-disable-next-line */
    attrs: PropTypes.object,
  }),
};

GenericWidget.defaultProps = {
  type: 'text',
  description: {},
  title: {},
  input: {
    className: 'form__input',
    attrs: {},
  },
};

export default GenericWidget;
