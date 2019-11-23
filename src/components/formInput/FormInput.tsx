import React, { InputHTMLAttributes } from 'react';
import styles from './FormInput.module.scss';

interface IFormInputProps extends InputHTMLAttributes<any> {
  label?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const FormInput: React.FC<IFormInputProps> = ({
  label,
  handleChange,
  ...otherProps
}: IFormInputProps) => {
  return (
    <div className={styles.group}>
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } formInputLabel`}
        >
          {label}
        </label>
      ) : null}
      <input
        className={styles.formInput}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
