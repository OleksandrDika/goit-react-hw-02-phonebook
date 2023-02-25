import { FormField } from 'components/Filter/Filter.styled';
import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <FormField>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </FormField>
  );
};
