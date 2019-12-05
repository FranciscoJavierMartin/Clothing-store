import React from 'react';
import { DirectoryMenuContainer } from './Directory.styles';
import MenuItem from '../menu-item/MenuItem';
import { IHomeSection } from '../../interfaces/common';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../interfaces/states';
import { selectDirectorySections } from '../../store/directory/directorySelectors';
import { RouteComponentProps } from 'react-router';

interface IDirectoryProps extends RouteComponentProps{}

const Directory: React.FC<IDirectoryProps> = (props: IDirectoryProps) => {
  const sections = useSelector<IGlobalState, IHomeSection[]>(
    selectDirectorySections
  );

  return (
    <DirectoryMenuContainer data-test='directory-component'>
      {sections.map((section: IHomeSection) => (
        <MenuItem key={section.id} {...section} {...props}/>
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
