import { createContext } from 'react';
import { SHOP_DATA } from '../../data/directory.data';
import { IShopData } from '../../interfaces/common';

const CollectionsContext = createContext<IShopData>(SHOP_DATA);

export default CollectionsContext;