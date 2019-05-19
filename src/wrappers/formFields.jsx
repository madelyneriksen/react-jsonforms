/* This is a spike of the form fields implementation.
 * It's a little messy right now but it does behave in the desired
 * manner. Will rewrite this before release.
 */

import React from 'react';
import PropTypes from 'prop-types';
import GenericWidget from '../widgets/GenericWidget';


class FormWrapper extends React.Component {
  constructor(props) {
    super(props);

    const { schema: propsSchema } = this.props;

    this.state = {
      schema: propsSchema,
      formData: {},
      refs: {},
    };

    const { schema } = this.state;

    // Construct File Handlers.
    schema.fields.forEach((field) => {
      if (field.type === 'file') {
        // Add ref listeners to all files.
        const { refs } = this.state;
        refs[field.name] = React.createRef();
        this.state.refs = refs;
      }
      if ('value' in field) {
        // Set all default values.
        const { formData } = this.state;
        formData[field.name] = field.value;
        this.state.formData = formData;
      } else {
        const { formData } = this.state;
        formData[field.name] = '';
        this.state.formData = formData;
      }
    });

    // Bindings.
    this.handleChange = this.handleChange.bind(this);
    this.pickWidget = this.pickWidget.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const field = target.name;

    const usesChecked = (target.type === 'checkbox' || target.type === 'radio');
    const isFile = (target.type === 'file');

    const { formData, refs } = this.state;
    if (usesChecked) {
      formData[field] = target.checked;
    } else if (isFile) {
      const { files } = refs[target.name].current;
      formData[field] = files;
    } else {
      formData[field] = target.value;
    }
    const newState = { ...this.state, formData };
    this.setState(newState);

    // Callback passed in by the parent.
    const { handleChange } = this.props;
    if (handleChange !== false) {
      handleChange(formData);
    }
  }

  pickWidget(field) {
    const { formData } = this.state;
    return (
      <GenericWidget
        {...field}
        key={field.name}
        onChange={this.handleChange}
        value={formData[field.name]}
      />
    );
  }

  render() {
    const {
      schema,
    } = this.state;
    const {
      fields,
    } = schema;
    return (
      <fieldset>
        {fields.map(field => this.pickWidget(field))}
      </fieldset>
    );
  }
}

FormWrapper.propTypes = {
  handleChange: PropTypes.func.isRequired,
  /* eslint-disable-next-line */
  schema: PropTypes.object.isRequired,
};

export default FormWrapper;
