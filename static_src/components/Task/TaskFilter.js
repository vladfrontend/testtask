import React from 'react';
import Select from 'react-select';

export default () => (
  <div>
     <Select
        name="form-field-name"
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
        placeholder="Choose project"
      />
  </div>
);