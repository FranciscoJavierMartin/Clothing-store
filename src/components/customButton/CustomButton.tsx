import React, { ButtonHTMLAttributes } from 'react';
import styles from './CustomButton.module.scss';

interface ICustomButtonProps extends ButtonHTMLAttributes<any> {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: ICustomButtonProps) => {
  return (
    <button
      className={`
      ${inverted ? 'inverted' : ''}
      ${isGoogleSignIn ? styles.googleSignIn : ''} ${
        styles.customButton
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
