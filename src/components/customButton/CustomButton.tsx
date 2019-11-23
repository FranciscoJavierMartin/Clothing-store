import React, { ButtonHTMLAttributes } from 'react';
import styles from './CustomButton.module.scss';

interface ICustomButtonProps extends ButtonHTMLAttributes<any> {}

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  ...otherProps
}: ICustomButtonProps) => {
  return (
    <button className={styles.customButton} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
