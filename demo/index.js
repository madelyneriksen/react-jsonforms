import React from 'react';
import { render } from 'react-dom';
import FormClass from '../src/wrappers/formFields';


const props = {
  schema: {
    title: { text: "This is my form." },
    description: { text: "My form is so awesome." },
    fields: [
      {
        name: "myField",
        type: "text",
        title: { text: "My Field" },
        description: { text: 'My field is awesome.' },
      },
    ],
  },
};


render((<FormClass {...props} />), document.getElementById('app'));
