import React, { useContext } from 'react';
import { DirectoryMenuContainer } from './Directory.styles';
import MenuItem from '../menu-item/MenuItem';
import { IHomeSection } from '../../interfaces/common';
import { RouteComponentProps } from 'react-router';
import DirectoryContext from '../../contexts/directory/DirectoryContext';

interface IDirectoryProps extends RouteComponentProps{}

const Directory: React.FC<IDirectoryProps> = (props: IDirectoryProps) => {
  const sections = useContext(DirectoryContext);

  return (
    <DirectoryMenuContainer data-test='directory-component'>
      {sections.map((section: IHomeSection) => (
        <MenuItem key={section.id} {...section} {...props}/>
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
