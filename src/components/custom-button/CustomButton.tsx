import React, { ButtonHTMLAttributes } from 'react';
import { CustomButtonContainer } from './CustomButton.styles';

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
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
