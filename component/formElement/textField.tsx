import React from 'react';
import {
  ControlLabel,
  FormControl,
  FormControlProps,
  FormGroup,
  HelpBlock,
} from 'rsuite';

interface TextFieldPropsType extends FormControlProps {
  name: string;
  label: string;
}

const TextField: React.FC<TextFieldPropsType> = ({ name, label, ...props }) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl name={name} {...props} />
      <HelpBlock tooltip>Required</HelpBlock>
    </FormGroup>
  );
};

export default TextField;
