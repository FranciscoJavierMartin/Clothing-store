import React from 'react';
import styles from './Directory.module.scss';
import MenuItem from '../menuItem/MenuItem';
import { IHomeSection } from '../../interfaces/common';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../interfaces/states';
import { selectDirectorySections } from '../../store/selectors/directorySelector';

interface IDirectoryProps {}

const Directory: React.FC<IDirectoryProps> = (props: IDirectoryProps) => {
  const sections = useSelector<IGlobalState, IHomeSection[]>(
    selectDirectorySections
  );

  return (
    <div className={styles.directoryMenu} data-test='directory-component'>
      {sections.map((section: IHomeSection) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
