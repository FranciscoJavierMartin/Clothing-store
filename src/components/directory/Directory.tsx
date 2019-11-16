import React from 'react';
import styles from './Directory.module.scss';
import { sections } from '../../data/directory.data';
import MenuItem from '../menuItem/MenuItem';

interface IDirectoryProps {

}

const Directory: React.FC<IDirectoryProps> = (props:IDirectoryProps) => {
  
  return(
    <div className={styles.directoryMenu} data-test='directory-component'>
      {sections.map((section) => (
        <MenuItem key={section.id}title={section.title} imageUrl={section.imageUrl} size={section.size}/>
      ))}
    </div>
  );
}

export default Directory;