import { createContext } from 'react';
import { sections } from '../../data/directory.data';

const DirectoryContext = createContext(sections);
export default DirectoryContext;
