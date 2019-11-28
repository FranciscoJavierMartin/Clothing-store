import React, { InputHTMLAttributes } from 'react';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './FormInput.styles';

interface IFormInputProps extends InputHTMLAttributes<any> {
  label?: string;
  value: string;
}

const FormInput: React.FC<IFormInputProps> = ({
  onChange,
  label,
  ...otherProps
}: IFormInputProps) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={onChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
    </GroupContainer>
  );
};

export default FormInput;
