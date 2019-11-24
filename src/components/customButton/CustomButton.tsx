import React, { ButtonHTMLAttributes } from 'react';
import styles from './CustomButton.module.scss';

interface ICustomButtonProps extends ButtonHTMLAttributes<any> {
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: ICustomButtonProps) => {
  return (
    <button className={`${isGoogleSignIn ? styles.googleSignIn : ''} ${styles.customButton}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
